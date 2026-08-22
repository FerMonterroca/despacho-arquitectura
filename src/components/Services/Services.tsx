import type { Service } from "../../types/site";
import "./Services.css";

interface ServicesProps {
  eyebrow: string;
  title: string;
  services: Service[];
}

function Services({
  eyebrow,
  title,
  services,
}: ServicesProps) {
  return (
    <section className="services" id="servicios">
      <div className="container">
        <div className="services__header">
          <p className="services__eyebrow">
            {eyebrow}
          </p>

          <h2 className="services__title">
            {title}
          </h2>
        </div>

        <div className="services__list">
          {services.map((service, index) => (
            <article
              className="service-item"
              key={service.name}
            >
              <span className="service-item__number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="service-item__name">
                {service.name}
              </h3>

              <p className="service-item__description">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;