import { ChevronDownIcon } from "@radix-ui/react-icons";

export interface TestimonialItem {
  id: string;
  author: string;
  headline: string;
  paragraphs: string[];
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: "terri",
    author: "Terri",
    headline: "I feel like a better version of myself",
    paragraphs: [
      "Spending time with Chris has been a genuinely meaningful experience and I always leave feeling like a better version of myself. He offers a calm, supportive presence and shows a sincere interest in understanding what I’m going through.",
      "Chris genuinely cares, listens deeply and has a remarkable ability to broaden perspective by helping me consider how others might think or feel, without ever discounting my own emotions. I’ve felt completely safe sharing vulnerable parts of my life with him and each conversation leaves me more grounded, more confident, lighter, clearer and genuinely better both in mind and body.",
    ],
  },
  {
    id: "howard",
    author: "Howard",
    headline:
      "Chris became a really trusted right-hand man, kind of like a friend and a mentor",
    paragraphs: [
      "The hardest thing to do when you’re broken is admit that you’re broken and try to change your situation.",
      "I met Chris 10 months ago and was already open to the idea of making some changes in my life. But part of making those changes involved becoming more confident in being able to see the truth, rather than just what I believed to be true, and being confident that the decisions I made weren’t knee-jerk reactions or decisions made out of spite.",
      "Chris became a really trusted right-hand man, kind of like a friend and a mentor. Someone you could run ideas by who would challenge your thinking and help you make good decisions.",
      "He was on a bit of a journey himself and has transformed his life after going through some really tough times. Actually seeing that transformation gave me the confidence to know that if he can transform his life, then I can transform mine too.",
      "I wasn’t in a good place. It’s taken a long time to get to a place where I value myself, and that wouldn’t have happened if it wasn’t for Chris.",
    ],
  },
  {
    id: "hayley",
    author: "Hayley",
    headline:
      "One of the most emotionally supportive, grounded and thoughtful people I’ve met",
    paragraphs: [
      "I have the pleasure of knowing Chris personally, and I can honestly say that he is one of the most emotionally supportive, grounded and thoughtful people I’ve met.",
      "Chris has a remarkable ability to listen without judgement and help me make sense of my thoughts when I’m overthinking or feeling overwhelmed. He has a very calming presence and a natural way of helping me step back from a situation, see it from a different perspective and approach it more rationally.",
      "What I particularly value is that Chris never simply tells me what I want to hear. He is honest, thoughtful and will gently challenge my thinking when he feels I’m looking at something from an unhelpful perspective, he does this with genuine compassion, never making me feel judged or dismissed.",
      "His emotional intelligence, patience and ability to make people feel heard are qualities I really admire. Knowing Chris has genuinely helped me to look at situations differently and, at times, to find clarity when I’ve struggled to find it myself.",
      "I have a huge amount of respect for Chris, both as a person and for the way he supports others. He is someone I would wholeheartedly recommend.",
    ],
  },
];

export default function Testimonials() {
  return (
    <section
      className="page-section testimonials-section"
      id="testimonials"
      aria-labelledby="testimonials-title"
    >
      <p className="section-kicker">Recommendations</p>
      <h2 id="testimonials-title">What people I&apos;ve supported say.</h2>

      <div className="testimonials-list">
        {testimonialsData.map((item) => (
          <details
            key={item.id}
            name="testimonial-accordion"
            className="testimonial-card group"
          >
            <summary className="testimonial-summary">
              <div className="testimonial-header">
                <div className="testimonial-meta">
                  <blockquote className="testimonial-headline">
                    “{item.headline}”
                  </blockquote>
                  <p className="testimonial-author">{item.author}</p>
                </div>
                <div className="testimonial-chevron" aria-hidden="true">
                  <ChevronDownIcon />
                </div>
              </div>
              <div className="testimonial-cue">
                <span className="cue-read">Read full story ↓</span>
                <span className="cue-close">Close story ↑</span>
              </div>
            </summary>

            <div className="testimonial-body">
              {item.paragraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
