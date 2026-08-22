import type { CTAContent } from "../../types/site";
import "./CTASection.css";

interface CTASectionProps {
  content: CTAContent;
}

function CTASection({ content }: CTASectionProps) {
  return (
    <section className="cta-section">
      <div className="container cta-section__inner">
        <div className="cta-section__content">
          <p className="cta-section__eyebrow">
            Empecemos por tu espacio
          </p>

          <h2 className="cta-section__headline">
            {content.headline}
          </h2>

          <p className="cta-section__description">
            {content.description}
          </p>
        </div>

        <div className="cta-section__action">
          <a
            href={content.href}
            className="cta-section__button"
          >
            {content.buttonLabel}
          </a>
        </div>
      </div>
    </section>
  );
}

export default CTASection;