import type { FooterContent } from "../../types/site";
import "./Footer.css";

interface FooterProps {
  content: FooterContent;
}

function Footer({ content }: FooterProps) {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <p className="footer__name">
              {content.businessName}
            </p>

            <p className="footer__description">
              {content.description}
            </p>
          </div>

          <nav
            className="footer__links"
            aria-label="Enlaces de contacto"
          >
            <a href={content.instagramHref}>
              {content.instagramLabel}
            </a>

            <a href={content.whatsappHref}>
              {content.whatsappLabel}
            </a>

            <a href={content.emailHref}>
              {content.emailLabel}
            </a>
          </nav>
        </div>

        <div className="footer__bottom">
          <p className="footer__disclaimer">
            {content.disclaimer}
          </p>

          <p className="footer__credit">
            Demo Web Cotiza
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;