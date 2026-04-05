import { Linkedin, Bot, Radio, Rocket, Users, UserCheck, Check, Globe, Youtube, Send, ArrowRight, Sparkles, Zap, Trophy } from "lucide-react";
import FAQ from "@/components/FAQ";
import { Button } from "@/components/ui/button";
import ApplicationDialog from "@/components/ApplicationDialog";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { prices } from "@/lib/payment-matrix";

const Index = () => {
  const pricingTiers = [
    {
      key: "community",
      name: "Community",
      price: "\u20ac29",
      icon: <Users className="w-6 h-6" />,
      features: prices.community.features,
    },
    {
      key: "live",
      name: "Live",
      price: "\u20ac79",
      popular: true,
      icon: <Radio className="w-6 h-6" />,
      features: prices.live.features,
    },
    {
      key: "mentorship",
      name: "Mentorship",
      price: "\u20ac199",
      icon: <UserCheck className="w-6 h-6" />,
      features: prices.mentorship.features,
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(16,185,129,0.06)_1px,transparent_0)] bg-[size:32px_32px]" />
        {/* Gradient orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] animate-glow-pulse" />

        <div className="container px-4 pt-24 pb-20 md:pt-32 md:pb-28 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4" />
              <span>1-week free trial on all plans</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-[1.1]">
              <span className="text-slate-50">Build with AI.</span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-light via-primary to-primary-dark">
                Get hired.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Weekly live sessions. Real projects. Graduates at real companies. This is not a course -- it's a builder program.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => document.getElementById('pricing-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-accent text-accent-foreground hover:bg-accent-dark px-8 py-6 text-lg font-semibold rounded-xl shadow-[0_0_30px_-5px_rgba(251,191,36,0.25)] hover:shadow-[0_0_40px_-5px_rgba(251,191,36,0.4)] transition-all duration-300 hover:-translate-y-0.5"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                onClick={() => document.getElementById('success-stories')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-primary/30 text-primary hover:bg-primary/10 px-8 py-6 text-lg rounded-xl transition-all duration-300"
              >
                See Success Stories
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Social proof bar */}
      <section className="border-y border-border bg-card/50">
        <div className="container px-4 py-6">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-3 items-center">
            <span className="text-sm text-muted-foreground">Alumni work at:</span>
            <span className="text-sm font-semibold text-slate-300">Frontline Group</span>
            <span className="text-sm font-semibold text-slate-300">Whitespace Software</span>
            <span className="text-sm font-semibold text-slate-300">ToroNet</span>
            <span className="text-sm font-semibold text-slate-300">YellowKorner</span>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="container px-4 py-20 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-4">
            Why Learn by Doing?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The world changed. The way you learn should too.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 group">
            <div className="p-3 rounded-xl bg-primary/10 text-primary w-fit mb-6 group-hover:bg-primary/20 transition-colors">
              <Rocket className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-slate-50 mb-4">Build Real Things with AI</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                <span>Ship products, not homework assignments</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                <span>AI agents, prompt engineering, and modern workflows</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                <span>Design, code, and launch using AI as your tool</span>
              </li>
            </ul>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 group">
            <div className="p-3 rounded-xl bg-primary/10 text-primary w-fit mb-6 group-hover:bg-primary/20 transition-colors">
              <Radio className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-slate-50 mb-4">Weekly Live Sessions</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                <span>Build alongside your mentor every week</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                <span>Ask questions, get feedback in real time</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                <span>Learn from others in the community</span>
              </li>
            </ul>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 group">
            <div className="p-3 rounded-xl bg-primary/10 text-primary w-fit mb-6 group-hover:bg-primary/20 transition-colors">
              <Trophy className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-slate-50 mb-4">Proven Outcomes</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                <span>Graduates hired at real companies</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                <span>Portfolio of shipped projects</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                <span>Industry recommendations and referrals</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-card/50 border-y border-border">
        <div className="container px-4 py-20 md:py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A structured journey from beginner to builder
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-20">
            {[
              { step: "1", title: "Join", desc: "Pick your plan. Get access to the community, recordings, and live sessions." },
              { step: "2", title: "Build with AI", desc: "Work on real projects using AI tools. Get feedback from your mentor and peers." },
              { step: "3", title: "Launch Your Project", desc: "Ship something real. Build your portfolio. Get career support and referrals." },
            ].map((item) => (
              <div key={item.step} className="relative bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-all duration-300">
                <div className="absolute -top-4 -left-4 w-9 h-9 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                  {item.step}
                </div>
                <h3 className="font-semibold text-lg mb-3 text-slate-50">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Learning Journey Timeline */}
          <div>
            <h3 className="text-2xl font-bold text-slate-50 text-center mb-10">Your Learning Journey</h3>
            <div className="relative">
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2" />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { phase: "1", title: "Foundation (Month 1-2)", items: ["AI fundamentals and prompt engineering", "Setting up your AI-powered workflow", "First hands-on project"] },
                  { phase: "2", title: "Development (Month 3-4)", items: ["AI agents and automation", "Building products end-to-end", "Team collaboration on real projects"] },
                  { phase: "3", title: "Mastery (Month 5-6)", items: ["Launch your own AI-powered product", "Portfolio completion", "Career preparation and referrals"] },
                ].map((phase) => (
                  <div key={phase.phase} className="relative bg-card border border-border rounded-2xl p-6">
                    <div className="hidden md:flex absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-primary text-primary-foreground rounded-full items-center justify-center font-bold text-sm">
                      {phase.phase}
                    </div>
                    <h4 className="text-lg font-semibold mb-4 text-primary text-center">{phase.title}</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      {phase.items.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <Zap className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="container px-4 py-20 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-4">
            What You'll Learn
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            One program. AI is the method. Building is the outcome.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {[
            "AI Agents & Automation",
            "Prompt Engineering",
            "Building Products with AI",
            "Design with AI Tools",
            "Content Creation with AI",
            "Full-Stack Development",
            "Cloud Architecture & DevOps",
            "Business Strategy & OKRs",
            "Team Collaboration & Agile",
          ].map((skill) => (
            <div key={skill} className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl hover:border-primary/30 transition-colors">
              <Check className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-slate-200 font-medium">{skill}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing-section" className="bg-card/50 border-y border-border">
        <div className="container max-w-5xl px-4 py-20 md:py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              All plans include a 1-week free trial
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingTiers.map((tier) => (
              <div
                key={tier.key}
                className={`relative bg-card rounded-2xl p-8 transition-all duration-300 ${
                  tier.popular
                    ? "ring-2 ring-primary border border-primary/30 md:scale-105 shadow-[0_0_40px_-10px_rgba(16,185,129,0.15)]"
                    : "border border-border hover:border-primary/20"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-sm font-semibold px-4 py-1 rounded-full">
                    Best Value
                  </div>
                )}
                <div className="p-3 rounded-xl bg-primary/10 text-primary w-fit mb-5">
                  {tier.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-50 mb-2">{tier.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-extrabold text-slate-50">{tier.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={() => {
                    const pkg = prices[tier.key];
                    if (pkg?.paymentLink) window.location.href = pkg.paymentLink;
                  }}
                  className={`w-full py-5 text-base font-semibold rounded-xl transition-all duration-300 ${
                    tier.popular
                      ? "bg-accent text-accent-foreground hover:bg-accent-dark shadow-[0_0_20px_-5px_rgba(251,191,36,0.3)] hover:shadow-[0_0_30px_-5px_rgba(251,191,36,0.5)]"
                      : "bg-primary/10 text-primary hover:bg-primary/20 border border-primary/20"
                  }`}
                >
                  Start Free Trial
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Your Mentor Section */}
      <section className="container max-w-5xl px-4 py-20 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-4">
            Meet Your Mentor
          </h2>
        </div>
        <div className="bg-card border border-border rounded-2xl p-8 md:p-10">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="flex-shrink-0">
              <Avatar className="w-20 h-20 ring-2 ring-primary/30">
                <AvatarImage src="/people/razbakov.jpg" alt="Alosha" />
                <AvatarFallback className="bg-primary/10 text-primary text-2xl">A</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <h3 className="font-bold text-2xl text-slate-50">Alosha</h3>
                <div className="flex items-center gap-2">
                  <a href="https://www.linkedin.com/in/razbakov/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="https://razbakov.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <Globe className="w-4 h-4" />
                  </a>
                  <a href="https://www.youtube.com/@razbakov" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <Youtube className="w-4 h-4" />
                  </a>
                  <a href="https://t.me/razbakov" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <Send className="w-4 h-4" />
                  </a>
                </div>
              </div>
              <p className="text-primary font-medium mb-4">AI Builder, Full Stack Developer & Mentor</p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                15+ years building products, leading teams, and shipping software. Now focused on teaching others how to build with AI -- from agents and automation to full-stack products. Runs weekly live sessions where you build alongside him.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-primary text-sm uppercase tracking-wider">AI & Building</h4>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>AI Agents & Automation</li>
                    <li>Prompt Engineering</li>
                    <li>Product Development with AI</li>
                    <li>Claude, GPT, Gemini workflows</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-primary text-sm uppercase tracking-wider">Technical</h4>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>Full Stack JavaScript/TypeScript</li>
                    <li>Vue.js, Nuxt.js, React</li>
                    <li>Cloud (AWS, Firebase)</li>
                    <li>DevOps & Architecture</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-primary text-sm uppercase tracking-wider">Leadership</h4>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>Team Management & Mentoring</li>
                    <li>Agile & Scrum</li>
                    <li>Business Strategy & OKRs</li>
                    <li>UI/UX Design</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Projects Section */}
      <section className="bg-card/50 border-y border-border">
        <div className="container px-4 py-20 md:py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-4">
              Real Projects, Real Impact
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                img: "/projects/WeDance.svg",
                name: "WeDance",
                desc: "Dance community platform connecting dancers and dance enthusiasts.",
                links: [
                  { label: "Website", href: "https://wedance.vip/" },
                  { label: "@WeDanceTravel", href: "https://www.instagram.com/wedancetravel/" },
                  { label: "@WeDanceMunich", href: "https://www.instagram.com/wedancemunich/" },
                  { label: "@salsa.cubana.munich", href: "https://www.instagram.com/salsa.cubana.munich" },
                ],
              },
              {
                img: "/projects/15x4.png",
                name: "15x4",
                desc: "Educational initiative sharing knowledge through 15-minute lectures.",
                links: [
                  { label: "Website", href: "https://15x4munich.netlify.app/" },
                  { label: "@15x4munich", href: "https://www.instagram.com/15x4munich/" },
                ],
              },
              {
                img: "/projects/WeHelp.png",
                name: "WeHelp",
                desc: "Platform connecting volunteers with humanitarian aid initiatives.",
                links: [
                  { label: "Website", href: "https://wehelp.wehelplive.workers.dev/" },
                  { label: "@wehelplive", href: "https://www.instagram.com/wehelplive/" },
                ],
              },
            ].map((project) => (
              <div key={project.name} className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">
                <div className="bg-slate-800/50 rounded-xl p-4 mb-4">
                  <img src={project.img} alt={project.name} className="w-full h-28 object-contain" />
                </div>
                <h3 className="text-xl font-semibold text-slate-50 mb-2">{project.name}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary-light transition-colors px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-xs font-medium"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Recommendations Section */}
      <section className="container px-4 py-20 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-4">
            Industry Recognition
          </h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-card border border-border rounded-2xl p-8">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <img
                  src="/people/biriukov.jpg"
                  alt="Dmytro Biriukov"
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-slate-50 mb-1">Dmytro Biriukov</h3>
                <p className="text-primary text-sm font-medium mb-4">Product Manager</p>
                <p className="text-muted-foreground leading-relaxed italic">
                  "I had the pleasure of working with Alex on numerous successful projects, and his communication skills and openness make him a pleasure to work with. Alex's innovative and creative approach to web development has resulted in some truly impressive results, and I have fond memories of our collaborative work together. I would highly recommend Alex to anyone looking for a skilled and enthusiastic web developer."
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <img
                  src="/people/zinoviev.jpg"
                  alt="Alexander Zinoviev"
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-slate-50 mb-1">Alexander Zinoviev</h3>
                <p className="text-primary text-sm font-medium mb-4">Architect</p>
                <p className="text-muted-foreground leading-relaxed italic">
                  "I have only nice experience with Alex. Productive discussing, only meaningful advices always up-to-date solutions. I could learn lots from him. Highly recommended!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section id="success-stories" className="bg-card/50 border-y border-border">
        <div className="container px-4 py-20 md:py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-4">
              Success Stories
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {/* James Robey */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0">
                  <img src="/people/robey.jpg" alt="James Robey" className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-slate-50">James Robey</h3>
                    <a href="https://www.linkedin.com/in/james-robey12/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                  <p className="text-sm text-primary font-medium">Data Analyst at Frontline Group</p>
                </div>
              </div>
              <div className="aspect-video w-full mb-4 rounded-xl overflow-hidden border border-border">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/37tkXapz7iw"
                  title="James Robey's Review"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="text-muted-foreground text-sm">
                "My time as an Intern was great. I learnt a lot of new skills and gained experience collaborating with others on projects. It helped guide me on my career path having learnt more about my strengths and weaknesses, and natural interests as a professional."
              </p>
            </div>

            {/* Dipali Mankodi */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0">
                  <img src="/people/mankodi.jpg" alt="Dipali Mankodi" className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-slate-50">Dipali Mankodi</h3>
                    <a href="https://www.linkedin.com/in/dipalimankodi/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                  <p className="text-sm text-primary font-medium">Product Designer at Whitespace Software</p>
                </div>
              </div>
              <div className="aspect-video w-full mb-4 rounded-xl overflow-hidden border border-border">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/16hBTep3Mxs"
                  title="Dipali Mankodi's Review"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="text-muted-foreground text-sm">
                "Gained hands-on experience in UX/UI design through real projects, leading to a full-time position as Product Designer at Whitespace Software."
              </p>
            </div>

            {/* Marjorie Dorighello */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0">
                  <img src="/people/dorighello.jpg" alt="Marjorie Dorighello" className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-slate-50">Marjorie Dorighello</h3>
                    <a href="https://www.linkedin.com/in/marjrocks/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                  <p className="text-sm text-primary font-medium">Art Gallery Consultant at YellowKorner</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">
                "Led team sprints and fostered cross-functional collaboration between designers and developers. Designed and tested a comprehensive design system, created prototypes, and conducted in-depth user research."
              </p>
            </div>

            {/* Sanya Panic */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0">
                  <img src="/people/panic.jpg" alt="Sanya Panic" className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-slate-50">Sanya Panic</h3>
                    <a href="https://www.linkedin.com/in/sanja-panic-3378b7185/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                  <p className="text-sm text-primary font-medium">Full Stack Engineer at WeDance</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">
                "The hands-on experience and mentorship I received were invaluable. The project-based learning approach helped me develop practical skills that directly translated to my role."
              </p>
            </div>

            {/* Zuriya Dyuss */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0">
                  <img src="/people/dyuss.jpg" alt="Zuriya Dyuss" className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-slate-50">Zuriya Dyuss</h3>
                    <a href="https://www.linkedin.com/in/zuriya-dyussebayeva/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                  <p className="text-sm text-primary font-medium">UX Designer at WeDance</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">
                "The program's focus on real-world projects and collaborative learning environment prepared me well for my career. I developed both technical and soft skills that are essential in my current role."
              </p>
            </div>

            {/* Joshua Ilori */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0">
                  <img src="/people/ilori.jpg" alt="Joshua Ilori" className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-slate-50">Joshua Ilori</h3>
                    <a href="https://www.linkedin.com/in/jia-ayo/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                  <p className="text-sm text-primary font-medium">Software Developer at ToroNet</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">
                "During my internship, I gained hands-on experience with Vue.js, Firebase, and Nuxt.js. I worked on exciting projects including NFC card integration and admin systems. The project-based learning approach and team collaboration experience were instrumental in securing my current role at ToroNet."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container px-4 py-20 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-4">
            Frequently Asked Questions
          </h2>
        </div>
        <FAQ />
      </section>

      {/* CTA Section */}
      <section className="border-t border-border">
        <div className="container px-4 py-20 md:py-24 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-6">
              Ready to Build with AI?
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Join the next cohort and start building real projects with AI. All plans include a 1-week free trial.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <ApplicationDialog>
                <Button className="bg-accent text-accent-foreground hover:bg-accent-dark px-8 py-6 text-lg font-semibold rounded-xl shadow-[0_0_30px_-5px_rgba(251,191,36,0.25)] hover:shadow-[0_0_40px_-5px_rgba(251,191,36,0.5)] transition-all duration-300 hover:-translate-y-0.5">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </ApplicationDialog>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
