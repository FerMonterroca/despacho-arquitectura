import type { WhatsAppConfig } from "../../types/site";
import "./WhatsAppButton.css";

interface WhatsAppButtonProps {
  config: WhatsAppConfig;
}

function WhatsAppButton({
  config,
}: WhatsAppButtonProps) {
  const whatsappUrl = `https://wa.me/${config.phone}?text=${encodeURIComponent(
    config.message,
  )}`;

  return (
    <a
      href={whatsappUrl}
      className="whatsapp-button"
      target="_blank"
      rel="noreferrer"
      aria-label="Contactar por WhatsApp"
    >
      <span className="whatsapp-button__icon">
        ↗
      </span>

      <span className="whatsapp-button__label">
        {config.label}
      </span>
    </a>
  );
}

export default WhatsAppButton;