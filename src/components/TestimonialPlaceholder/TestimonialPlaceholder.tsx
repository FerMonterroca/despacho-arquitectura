import type { TestimonialContent } from "../../types/site";
import "./TestimonialPlaceholder.css";

interface TestimonialPlaceholderProps {
  content: TestimonialContent;
}

function TestimonialPlaceholder({
  content,
}: TestimonialPlaceholderProps) {
  return (
    <section className="testimonial">
      <div className="container testimonial__inner">
        <p className="testimonial__eyebrow">
          {content.eyebrow}
        </p>

        <div className="testimonial__content">
          <span className="testimonial__mark">
            “
          </span>

          <blockquote className="testimonial__quote">
            {content.quote}
          </blockquote>

          <p className="testimonial__note">
            {content.note}
          </p>
        </div>
      </div>
    </section>
  );
}

export default TestimonialPlaceholder;