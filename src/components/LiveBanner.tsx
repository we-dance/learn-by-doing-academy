import { useEffect, useMemo, useState } from "react";
import { Radio, MessageSquarePlus, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const CHANNEL_URL = "https://www.youtube.com/@razbakov";
const LIVE_URL = "https://www.youtube.com/@razbakov/live";
const AGENDA_URL =
  "https://docs.google.com/document/d/19KK_LtUS5hH-zh241w6ItwEedFr_Ke7OtqPJE-C7VZM/edit";
const STREAM_TZ = "Europe/Berlin";
const STREAM_HOUR = 10; // Saturdays 10:00–11:00 Europe/Berlin
const STREAM_DURATION_MS = 60 * 60 * 1000; // 1 hour

type LiveState = { isLive: boolean; videoId: string | null };

/**
 * Compute the next (or currently-running) Saturday 10:00 Europe/Berlin as a
 * real Date. Uses Intl to get the offset for Berlin on the target day, so
 * DST flips work without a tz library.
 */
function getNextSaturdayStart(now: Date): Date {
  // Find the next Saturday (incl. today if today is Sat).
  const berlinNow = new Date(
    now.toLocaleString("en-US", { timeZone: STREAM_TZ }),
  );
  const dow = berlinNow.getDay(); // 0 Sun .. 6 Sat
  const daysUntilSat = (6 - dow + 7) % 7;
  const target = new Date(berlinNow);
  target.setDate(target.getDate() + daysUntilSat);
  target.setHours(STREAM_HOUR, 0, 0, 0);

  // If it's already Saturday past stream end, roll to next Saturday.
  if (daysUntilSat === 0) {
    const endOfStream = target.getTime() + STREAM_DURATION_MS;
    if (berlinNow.getTime() > endOfStream) {
      target.setDate(target.getDate() + 7);
    }
  }

  // `target` is a Date whose wall-clock happens to equal Berlin wall-clock
  // because we built it from a Berlin-formatted string. Compute the real
  // UTC instant by combining that wall-clock with Berlin's current offset.
  const berlinOffsetMinutes = getBerlinOffsetMinutes(target);
  const utcMs =
    Date.UTC(
      target.getFullYear(),
      target.getMonth(),
      target.getDate(),
      target.getHours(),
      target.getMinutes(),
    ) -
    berlinOffsetMinutes * 60 * 1000;
  return new Date(utcMs);
}

/** Offset in minutes from UTC for the given instant in Europe/Berlin. */
function getBerlinOffsetMinutes(d: Date): number {
  // Format the instant in Berlin and compare to UTC fields.
  const dtf = new Intl.DateTimeFormat("en-US", {
    timeZone: STREAM_TZ,
    hour12: false,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
  const parts = dtf.formatToParts(d).reduce<Record<string, string>>(
    (acc, p) => {
      if (p.type !== "literal") acc[p.type] = p.value;
      return acc;
    },
    {},
  );
  const asUtc = Date.UTC(
    Number(parts.year),
    Number(parts.month) - 1,
    Number(parts.day),
    Number(parts.hour === "24" ? "0" : parts.hour),
    Number(parts.minute),
  );
  return Math.round((asUtc - d.getTime()) / 60000);
}

function formatCountdown(ms: number): string {
  if (ms <= 0) return "starting now";
  const totalMinutes = Math.floor(ms / 60000);
  const days = Math.floor(totalMinutes / (60 * 24));
  const hours = Math.floor((totalMinutes % (60 * 24)) / 60);
  const minutes = totalMinutes % 60;
  if (days > 0) return `${days}d ${hours}h ${minutes}m`;
  if (hours > 0) return `${hours}h ${minutes}m`;
  return `${minutes}m`;
}

function formatNextDate(d: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: STREAM_TZ,
    weekday: "long",
    month: "short",
    day: "numeric",
  }).format(d);
}

const LiveBanner = () => {
  const [state, setState] = useState<LiveState>({
    isLive: false,
    videoId: null,
  });
  const [now, setNow] = useState<Date>(() => new Date());

  // Fetch live status once on mount.
  useEffect(() => {
    let cancelled = false;
    fetch("/api/youtube-live")
      .then((r) => (r.ok ? r.json() : null))
      .then((data: LiveState | null) => {
        if (!cancelled && data && typeof data.isLive === "boolean") {
          setState(data);
        }
      })
      .catch(() => {
        // Swallow — UI falls back to the countdown.
      });
    return () => {
      cancelled = true;
    };
  }, []);

  // Tick the countdown every 30s (fine-grained enough for h:mm display).
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(id);
  }, []);

  const nextStart = useMemo(() => getNextSaturdayStart(now), [now]);
  const countdown = formatCountdown(nextStart.getTime() - now.getTime());
  const nextLabel = formatNextDate(nextStart);

  const watchUrl = state.videoId
    ? `https://www.youtube.com/watch?v=${state.videoId}`
    : LIVE_URL;

  return (
    <section
      aria-label="Saturday live session"
      className="relative border-b border-border/50 bg-gradient-to-b from-background via-background to-background/60"
    >
      <div className="container px-4 py-4 md:py-5">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-6">
          <div className="flex items-center gap-3 min-w-0">
            {state.isLive ? (
              <span className="relative flex items-center justify-center w-9 h-9 rounded-full bg-red-500/15 border border-red-500/40 shrink-0">
                <span className="absolute inline-flex h-3 w-3 rounded-full bg-red-500 opacity-75 animate-ping" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500" />
              </span>
            ) : (
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-primary/10 border border-primary/20 shrink-0">
                <Radio className="w-4 h-4 text-primary" />
              </span>
            )}
            <div className="min-w-0">
              {state.isLive ? (
                <>
                  <div className="text-sm font-semibold text-red-400 uppercase tracking-wider">
                    Live now
                  </div>
                  <div className="text-slate-50 text-sm md:text-base truncate">
                    Join the LearnByDoing live session on YouTube
                  </div>
                </>
              ) : (
                <>
                  <div className="text-xs md:text-sm font-semibold text-primary uppercase tracking-wider">
                    Next live session
                  </div>
                  <div className="text-slate-50 text-sm md:text-base truncate">
                    {nextLabel} · 10:00 Berlin
                    <span className="text-muted-foreground">
                      {" "}
                      · in {countdown}
                    </span>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 shrink-0">
            <Button
              asChild
              className={
                state.isLive
                  ? "bg-red-500 text-white hover:bg-red-600 font-semibold"
                  : "bg-accent text-accent-foreground hover:bg-accent-dark font-semibold"
              }
              size="sm"
            >
              <a
                href={state.isLive ? watchUrl : CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                {state.isLive ? "Watch live" : "Subscribe & get notified"}
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="sm"
              className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <a
                href={AGENDA_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageSquarePlus className="w-4 h-4 mr-2" />
                Add your question
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveBanner;
