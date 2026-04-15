// Vercel serverless function: detect whether @razbakov is live on YouTube
// without needing a YouTube Data API key. We fetch the channel's /live URL
// and inspect the returned HTML for a live-broadcast marker.
//
// Response shape: { isLive: boolean, videoId: string | null }
// Cached at the edge for 5 minutes (stale-while-revalidate 10 minutes) so
// we hit YouTube at most once per 5 min per region.

export const config = {
  runtime: "edge",
};

const LIVE_URL = "https://www.youtube.com/@razbakov/live";

export default async function handler(): Promise<Response> {
  try {
    const res = await fetch(LIVE_URL, {
      headers: {
        // A real-ish UA avoids a stripped-down response.
        "user-agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
        "accept-language": "en-US,en;q=0.9",
      },
      redirect: "follow",
    });

    const html = await res.text();

    // Primary signal: YouTube embeds "isLiveBroadcast":true in the ld+json
    // / ytInitialPlayerResponse blob when the page is a live watch page.
    const isLive = /"isLiveBroadcast"\s*:\s*true/.test(html) ||
      /"isLive"\s*:\s*true/.test(html);

    let videoId: string | null = null;
    if (isLive) {
      // Canonical URL on a watch page: <link rel="canonical" href="https://www.youtube.com/watch?v=XXX">
      const canonical = html.match(
        /<link\s+rel="canonical"\s+href="https:\/\/www\.youtube\.com\/watch\?v=([A-Za-z0-9_-]{6,})"/,
      );
      if (canonical) {
        videoId = canonical[1];
      } else {
        // Fallback: look for "videoId":"XXX" somewhere in the player response.
        const inline = html.match(/"videoId"\s*:\s*"([A-Za-z0-9_-]{6,})"/);
        if (inline) videoId = inline[1];
      }
    }

    return new Response(
      JSON.stringify({ isLive, videoId }),
      {
        status: 200,
        headers: {
          "content-type": "application/json; charset=utf-8",
          "cache-control":
            "public, s-maxage=300, stale-while-revalidate=600",
        },
      },
    );
  } catch (err) {
    // Fail safe: pretend not live. The client falls back to the countdown.
    return new Response(
      JSON.stringify({ isLive: false, videoId: null, error: true }),
      {
        status: 200,
        headers: {
          "content-type": "application/json; charset=utf-8",
          "cache-control": "public, s-maxage=60",
        },
      },
    );
  }
}
