import type { HeroContent } from "../../types/site";
import "./Hero.css";

interface HeroProps {
  content: HeroContent;
}

function Hero({ content }: HeroProps) {
  return (
    <section className="hero" id="inicio">
      <div className="container hero__container">
        <div className="hero__content">
          <p className="hero__microcopy">
            {content.microcopy}
          </p>

          <h1 className="hero__headline">
            {content.headline}
          </h1>

          <p className="hero__description">
            {content.description}
          </p>

          <div className="hero__actions">
            <a
              href={content.primaryCta.href}
              className="hero__button hero__button--primary"
            >
              {content.primaryCta.label}
            </a>

            <a
              href={content.secondaryCta.href}
              className="hero__button hero__button--secondary"
            >
              {content.secondaryCta.label}
            </a>
          </div>
        </div>

        <div className="hero__visual">
          {content.image ? (
            <img
              src={content.image}
              alt={content.imageAlt}
              className="hero__image"
            />
          ) : (
            <div className="hero__image-placeholder">
              <span>Fotografía principal</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Hero;