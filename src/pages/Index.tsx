import { Linkedin, Bot, Radio, Rocket, Users, UserCheck, Check } from "lucide-react";
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
      price: "€29",
      icon: <Users className="w-6 h-6" />,
      features: prices.community.features,
    },
    {
      key: "live",
      name: "Live",
      price: "€79",
      popular: true,
      icon: <Radio className="w-6 h-6" />,
      features: prices.live.features,
    },
    {
      key: "mentorship",
      name: "Mentorship",
      price: "€199",
      icon: <UserCheck className="w-6 h-6" />,
      features: prices.mentorship.features,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-accent/5 to-white relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,theme(colors.primary/5)_1px,transparent_0)] bg-[size:40px_40px] opacity-50 -z-10" />

      {/* Hero Section */}
      <section className="container px-4 py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,theme(colors.primary/10)_1px,transparent_0)] bg-[size:24px_24px] opacity-30 animate-[pulse_4s_ease-in-out_infinite]" />
        <div className="relative z-10">
          <h1 className="text-7xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary [text-shadow:_0_1px_30px_rgb(99_102_241_/_20%)]">
            Learn by Doing Academy
          </h1>
          <p className="text-2xl text-gray-800 mb-12 max-w-2xl mx-auto leading-relaxed">
            Learn to build with AI. Weekly live sessions, real projects, real outcomes.
          </p>
          <Button
            onClick={() => document.getElementById('pricing-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-accent text-white hover:bg-accent/90 px-12 py-6 text-xl font-semibold animate-[fadeIn_1s_ease-out_0.6s_both] shadow-[0_0_30px_-5px_rgba(236,72,153,0.3)] hover:shadow-[0_0_30px_-5px_rgba(236,72,153,0.5)] transition-all duration-300 rounded-xl hover:-translate-y-1 relative overflow-hidden group backdrop-blur-sm"
          >
            <span className="relative z-10">Start Your Journey</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Button>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="container px-4 py-16">
        <h2 className="text-3xl font-bold text-primary text-center mb-4">
          Why Learn by Doing?
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          The world changed. The way you learn should too.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="p-3 rounded-xl bg-primary/10 text-primary w-fit mb-4">
              <Rocket className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-4">Build Real Things with AI</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2" />
                <span>Ship products, not homework assignments</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2" />
                <span>AI agents, prompt engineering, and modern workflows</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2" />
                <span>Design, code, and launch using AI as your tool</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="p-3 rounded-xl bg-primary/10 text-primary w-fit mb-4">
              <Radio className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-4">Weekly Live Sessions</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2" />
                <span>Build alongside your mentor every week</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2" />
                <span>Ask questions, get feedback in real time</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2" />
                <span>Learn from others in the community</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="p-3 rounded-xl bg-primary/10 text-primary w-fit mb-4">
              <Bot className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-4">Proven Outcomes</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2" />
                <span>Graduates hired at real companies</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2" />
                <span>Portfolio of shipped projects</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2" />
                <span>Industry recommendations and referrals</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container px-4 py-16">
        <h2 className="text-3xl font-bold text-primary text-center mb-4">
          How It Works
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          A structured journey from beginner to builder
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="relative p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">1</div>
            <h3 className="font-semibold text-lg mb-3 text-primary">Join</h3>
            <p className="text-gray-600">Pick your plan. Get access to the community, recordings, and live sessions.</p>
          </div>
          <div className="relative p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">2</div>
            <h3 className="font-semibold text-lg mb-3 text-primary">Build with AI</h3>
            <p className="text-gray-600">Work on real projects using AI tools. Get feedback from your mentor and peers.</p>
          </div>
          <div className="relative p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">3</div>
            <h3 className="font-semibold text-lg mb-3 text-primary">Launch Your Project</h3>
            <p className="text-gray-600">Ship something real. Build your portfolio. Get career support and referrals.</p>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-primary text-center mb-8">Your Learning Journey</h3>
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-primary/20 -translate-y-1/2"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="relative bg-white p-6 rounded-xl shadow-lg">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">1</div>
                <h4 className="text-lg font-semibold mb-3 text-primary text-center">Foundation (Month 1-2)</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>- AI fundamentals and prompt engineering</li>
                  <li>- Setting up your AI-powered workflow</li>
                  <li>- First hands-on project</li>
                </ul>
              </div>
              <div className="relative bg-white p-6 rounded-xl shadow-lg">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">2</div>
                <h4 className="text-lg font-semibold mb-3 text-primary text-center">Development (Month 3-4)</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>- AI agents and automation</li>
                  <li>- Building products end-to-end</li>
                  <li>- Team collaboration on real projects</li>
                </ul>
              </div>
              <div className="relative bg-white p-6 rounded-xl shadow-lg">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">3</div>
                <h4 className="text-lg font-semibold mb-3 text-primary text-center">Mastery (Month 5-6)</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>- Launch your own AI-powered product</li>
                  <li>- Portfolio completion</li>
                  <li>- Career preparation and referrals</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="container px-4 py-16 bg-white rounded-3xl my-8">
        <h2 className="text-3xl font-bold text-primary text-center mb-4">
          What You'll Learn
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          One program. AI is the method. Building is the outcome.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
            <div key={skill} className="flex items-center gap-3 p-4 bg-primary/5 rounded-lg">
              <Check className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-gray-700 font-medium">{skill}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing-section" className="container max-w-5xl px-4 py-16">
        <h2 className="text-3xl font-bold text-primary text-center mb-4">
          Choose Your Plan
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          All plans include a 1-week free trial
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier) => (
            <div
              key={tier.key}
              className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative ${
                tier.popular ? "ring-2 ring-primary scale-105" : ""
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-sm px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <div className="p-3 rounded-xl bg-primary/10 text-primary w-fit mb-4">
                {tier.icon}
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">{tier.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-gray-900">{tier.price}</span>
                <span className="text-gray-500">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                onClick={() => {
                  const pkg = prices[tier.key];
                  if (pkg?.paymentLink) window.location.href = pkg.paymentLink;
                }}
                className={`w-full ${
                  tier.popular
                    ? "bg-primary text-white hover:bg-primary/90"
                    : "bg-primary/10 text-primary hover:bg-primary/20"
                } transition-colors duration-300`}
              >
                Start Free Trial
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* Meet Your Mentor Section */}
      <section className="container max-w-5xl px-4 py-16">
        <h2 className="text-3xl font-bold text-primary text-center mb-12">
          Meet Your Mentor
        </h2>
        <div className="grid grid-cols-1 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-start gap-6 mb-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16">
                  <Avatar className="w-full h-full">
                    <AvatarImage src="/people/razbakov.jpg" alt="Alösha" />
                    <AvatarFallback>A</AvatarFallback>
                  </Avatar>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-1">
                  <div className="flex items-center gap-2">
                    Alösha
                    <a href="https://www.linkedin.com/in/razbakov/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a href="https://razbakov.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors text-sm">
                      Website
                    </a>
                    <a href="https://www.youtube.com/@razbakov" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors text-sm">
                      YouTube
                    </a>
                    <a href="https://t.me/razbakov" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors text-sm">
                      Telegram
                    </a>
                  </div>
                </h3>
                <p className="text-gray-600 mb-4">AI Builder, Full Stack Developer & Mentor</p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  15+ years building products, leading teams, and shipping software. Now focused on teaching others how to build with AI — from agents and automation to full-stack products. Runs weekly live sessions where you build alongside him.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">AI & Building</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>- AI Agents & Automation</li>
                      <li>- Prompt Engineering</li>
                      <li>- Product Development with AI</li>
                      <li>- Claude, GPT, Gemini workflows</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">Technical</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>- Full Stack JavaScript/TypeScript</li>
                      <li>- Vue.js, Nuxt.js, React</li>
                      <li>- Cloud (AWS, Firebase)</li>
                      <li>- DevOps & Architecture</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">Leadership</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>- Team Management & Mentoring</li>
                      <li>- Agile & Scrum</li>
                      <li>- Business Strategy & OKRs</li>
                      <li>- UI/UX Design</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Projects Section */}
      <section className="container px-4 py-16 bg-white rounded-3xl my-8">
        <h2 className="text-3xl font-bold text-primary text-center mb-12">
          Real Projects, Real Impact
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <img src="/projects/WeDance.svg" alt="WeDance" className="w-full h-32 object-contain mb-4" />
            <h3 className="text-xl font-semibold text-primary mb-2">WeDance</h3>
            <p className="text-gray-600 mb-4">Dance community platform connecting dancers and dance enthusiasts.</p>
            <div className="flex flex-wrap gap-2">
              <a href="https://wedance.vip/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors px-3 py-1 rounded-full bg-primary/5 text-sm">
                Website
              </a>
              <a href="https://www.instagram.com/wedancetravel/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors px-3 py-1 rounded-full bg-primary/5 text-sm">
                @WeDanceTravel
              </a>
              <a href="https://www.instagram.com/wedancemunich/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors px-3 py-1 rounded-full bg-primary/5 text-sm">
                @WeDanceMunich
              </a>
              <a href="https://www.instagram.com/salsa.cubana.munich" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors px-3 py-1 rounded-full bg-primary/5 text-sm">
                @salsa.cubana.munich
              </a>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <img src="/projects/15x4.png" alt="15x4" className="w-full h-32 object-contain mb-4" />
            <h3 className="text-xl font-semibold text-primary mb-2">15x4</h3>
            <p className="text-gray-600 mb-4">Educational initiative sharing knowledge through 15-minute lectures.</p>
            <div className="flex flex-wrap gap-2">
              <a href="https://15x4munich.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors px-3 py-1 rounded-full bg-primary/5 text-sm">
                Website
              </a>
              <a href="https://www.instagram.com/15x4munich/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors px-3 py-1 rounded-full bg-primary/5 text-sm">
                @15x4munich
              </a>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <img src="/projects/WeHelp.png" alt="WeHelp" className="w-full h-32 object-contain mb-4" />
            <h3 className="text-xl font-semibold text-primary mb-2">WeHelp</h3>
            <p className="text-gray-600 mb-4">Platform connecting volunteers with humanitarian aid initiatives.</p>
            <div className="flex flex-wrap gap-2">
              <a href="https://wehelp.wehelplive.workers.dev/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors px-3 py-1 rounded-full bg-primary/5 text-sm">
                Website
              </a>
              <a href="https://www.instagram.com/wehelplive/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors px-3 py-1 rounded-full bg-primary/5 text-sm">
                @wehelplive
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Recommendations Section */}
      <section className="container px-4 py-16 bg-primary/5 rounded-3xl my-8">
        <h2 className="text-3xl font-bold text-primary text-center mb-12">
          Industry Recognition
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-start gap-6 mb-6">
              <div className="flex-shrink-0">
                <img
                  src="/people/biriukov.jpg"
                  alt="Dmytro Biriukov"
                  className="w-16 h-16 rounded-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-1">Dmytro Biriukov</h3>
                <p className="text-gray-600 mb-4">Product Manager</p>
                <p className="text-gray-700 text-lg leading-relaxed italic">
                  "I had the pleasure of working with Alex on numerous successful projects, and his communication skills and openness make him a pleasure to work with. Alex's innovative and creative approach to web development has resulted in some truly impressive results, and I have fond memories of our collaborative work together. I would highly recommend Alex to anyone looking for a skilled and enthusiastic web developer."
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-start gap-6 mb-6">
              <div className="flex-shrink-0">
                <img
                  src="/people/zinoviev.jpg"
                  alt="Alexander Zinoviev"
                  className="w-16 h-16 rounded-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-1">Alexander Zinoviev</h3>
                <p className="text-gray-600 mb-4">Architect</p>
                <p className="text-gray-700 text-lg leading-relaxed italic">
                  "I have only nice experience with Alex. Productive discussing, only meaningful advices always up-to-date solutions. I could learn lots from him. Highly recommended!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="container px-4 py-16">
        <h2 className="text-3xl font-bold text-primary text-center mb-12">
          Success Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0">
                <img src="/people/robey.jpg" alt="James Robey" className="w-12 h-12 rounded-full object-cover" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold">James Robey</h3>
                  <a href="https://www.linkedin.com/in/james-robey12/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
                <p className="text-sm text-gray-600">Data Analyst at Frontline Group</p>
              </div>
            </div>
            <div className="aspect-video w-full mb-4 rounded-lg overflow-hidden">
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
            <p className="text-gray-700">
              "My time as an Intern was great. I learnt a lot of new skills and gained experience collaborating with others on projects. It helped guide me on my career path having learnt more about my strengths and weaknesses, and natural interests as a professional."
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0">
                <img src="/people/mankodi.jpg" alt="Dipali Mankodi" className="w-12 h-12 rounded-full object-cover" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold">Dipali Mankodi</h3>
                  <a href="https://www.linkedin.com/in/dipalimankodi/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
                <p className="text-sm text-gray-600">Product Designer at Whitespace Software</p>
              </div>
            </div>
            <div className="aspect-video w-full mb-4 rounded-lg overflow-hidden">
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
            <p className="text-gray-700">
              "Gained hands-on experience in UX/UI design through real projects, leading to a full-time position as Product Designer at Whitespace Software."
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0">
                <img src="/people/dorighello.jpg" alt="Marjorie Dorighello" className="w-12 h-12 rounded-full object-cover" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold">Marjorie Dorighello</h3>
                  <a href="https://www.linkedin.com/in/marjrocks/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
                <p className="text-sm text-gray-600">Art Gallery Consultant at YellowKorner</p>
              </div>
            </div>
            <p className="text-gray-700">
              "Led team sprints and fostered cross-functional collaboration between designers and developers. Designed and tested a comprehensive design system, created prototypes, and conducted in-depth user research."
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0">
                <img src="/people/panic.jpg" alt="Sanya Panic" className="w-12 h-12 rounded-full object-cover" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold">Sanya Panic</h3>
                  <a href="https://www.linkedin.com/in/sanja-panic-3378b7185/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
                <p className="text-sm text-gray-600">Full Stack Engineer at WeDance</p>
              </div>
            </div>
            <p className="text-gray-700">
              "The hands-on experience and mentorship I received were invaluable. The project-based learning approach helped me develop practical skills that directly translated to my role."
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0">
                <img src="/people/dyuss.jpg" alt="Zuriya Dyuss" className="w-12 h-12 rounded-full object-cover" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold">Zuriya Dyuss</h3>
                  <a href="https://www.linkedin.com/in/zuriya-dyussebayeva/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
                <p className="text-sm text-gray-600">UX Designer at WeDance</p>
              </div>
            </div>
            <p className="text-gray-700">
              "The program's focus on real-world projects and collaborative learning environment prepared me well for my career. I developed both technical and soft skills that are essential in my current role."
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0">
                <img src="/people/ilori.jpg" alt="Joshua Ilori" className="w-12 h-12 rounded-full object-cover" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold">Joshua Ilori</h3>
                  <a href="https://www.linkedin.com/in/jia-ayo/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
                <p className="text-sm text-gray-600">Software Developer at ToroNet</p>
              </div>
            </div>
            <p className="text-gray-700">
              "During my internship, I gained hands-on experience with Vue.js, Firebase, and Nuxt.js. I worked on exciting projects including NFC card integration and admin systems. The project-based learning approach and team collaboration experience were instrumental in securing my current role at ToroNet."
            </p>
          </div>
        </div>

        <div className="text-center mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Where Our Alumni Work</h3>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            <div className="text-gray-600 font-semibold">YellowKorner</div>
            <div className="text-gray-600 font-semibold">Whitespace Software</div>
            <div className="text-gray-600 font-semibold">ToroNet</div>
            <div className="text-gray-600 font-semibold">Frontline Group</div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container px-4 py-16">
        <h2 className="text-3xl font-bold text-primary text-center mb-12">
          Frequently Asked Questions
        </h2>
        <FAQ />
      </section>

      {/* CTA Section */}
      <section className="container px-4 py-16 text-center">
        <h2 className="text-3xl font-bold text-primary mb-6">
          Ready to Build with AI?
        </h2>
        <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
          Join the next cohort and start building real projects with AI. All plans include a 1-week free trial.
        </p>
        <div className="flex justify-center gap-4">
          <ApplicationDialog>
            <Button className="bg-accent text-white hover:bg-accent/90 px-8">
              Start Free Trial
            </Button>
          </ApplicationDialog>
        </div>
      </section>
    </div>
  );
};

export default Index;
