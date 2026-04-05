import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Why is this program relevant in today's job market?",
    answer: "AI is transforming every industry. Employers increasingly seek people who can build with AI — not just use it, but ship real products. Our program gives you hands-on experience building AI-powered projects, industry recommendations, and a portfolio that proves you can deliver.",
  },
  {
    question: "What will I learn?",
    answer: "You'll learn to build real products using AI: prompt engineering, AI agents, automation, full-stack development, design, and business strategy — all through hands-on projects. The curriculum evolves with the AI landscape, so you're always learning what's current.",
  },
  {
    question: "What makes your approach different?",
    answer: "We focus on building, not lectures. Every week you work on real projects alongside your mentor in live sessions. You ship products, build a portfolio, and get career support. Our graduates work at real companies — that's the proof.",
  },
  {
    question: "What will I achieve?",
    answer: "Beyond skills, you'll gain: 1) Real project experience that employers value, 2) A portfolio of AI-powered projects, 3) Recommendation letters from industry experts, 4) A professional network, 5) Practical AI workflow mastery, and 6) Career guidance and job referrals.",
  },
  {
    question: "How long does it take?",
    answer: "The full journey is 6 months with approximately 20 hours per week. You'll go from foundations (Month 1-2) through development (Month 3-4) to mastery (Month 5-6), building increasingly complex projects along the way.",
  },
  {
    question: "What's the difference between the plans?",
    answer: "Community (€29/mo) gives you recordings, Telegram group, and async Q&A. Live (€79/mo) adds weekly live sessions where you build alongside your mentor. Mentorship (€199/mo) adds 1-on-1 monthly calls, project reviews, and career guidance. All plans include a 1-week free trial.",
  },
];

const FAQ = () => {
  return (
    <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
      {faqs.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="text-left text-primary hover:text-primary-dark">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-gray-600">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FAQ;
