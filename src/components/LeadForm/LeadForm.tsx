import { useState } from "react";
import type { FormEvent } from "react";

import type {
  FormOption,
  LeadFormContent,
} from "../../types/site";

import "./LeadForm.css";

interface LeadFormProps {
  content: LeadFormContent;
}

interface SelectFieldProps {
  id: string;
  label: string;
  placeholder: string;
  options: FormOption[];
  required?: boolean;
}

function SelectField({
  id,
  label,
  placeholder,
  options,
  required = true,
}: SelectFieldProps) {
  return (
    <div className="lead-form__field">
      <label htmlFor={id} className="lead-form__label">
        {label}
      </label>

      <select
        id={id}
        name={id}
        className="lead-form__control"
        defaultValue=""
        required={required}
      >
        <option value="" disabled>
          {placeholder}
        </option>

        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

function LeadForm({ content }: LeadFormProps) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    setSubmitted(true);

    event.currentTarget.reset();
  }

  return (
    <section
      className="lead-form-section"
      id="contacto"
    >
      <div className="container lead-form-section__layout">
        <div className="lead-form-section__intro">
          <p className="lead-form-section__eyebrow">
            {content.eyebrow}
          </p>

          <h2 className="lead-form-section__title">
            {content.title}
          </h2>

          <p className="lead-form-section__description">
            {content.description}
          </p>
        </div>

        <div className="lead-form-section__form-wrapper">
          {submitted ? (
            <div
              className="lead-form__success"
              role="status"
            >
              <span className="lead-form__success-number">
                01
              </span>

              <h3 className="lead-form__success-title">
                {content.successTitle}
              </h3>

              <p className="lead-form__success-message">
                {content.successMessage}
              </p>

              <button
                type="button"
                className="lead-form__reset"
                onClick={() => setSubmitted(false)}
              >
                Enviar otra solicitud
              </button>
            </div>
          ) : (
            <form
              className="lead-form"
              onSubmit={handleSubmit}
            >
              <div className="lead-form__row">
                <div className="lead-form__field">
                  <label
                    htmlFor="name"
                    className="lead-form__label"
                  >
                    Nombre
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="lead-form__control"
                    placeholder="Tu nombre"
                    autoComplete="name"
                    required
                  />
                </div>

                <div className="lead-form__field">
                  <label
                    htmlFor="email"
                    className="lead-form__label"
                  >
                    Correo
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="lead-form__control"
                    placeholder="correo@ejemplo.com"
                    autoComplete="email"
                    required
                  />
                </div>
              </div>

              <div className="lead-form__row">
                <div className="lead-form__field">
                  <label
                    htmlFor="whatsapp"
                    className="lead-form__label"
                  >
                    WhatsApp
                  </label>

                  <input
                    id="whatsapp"
                    name="whatsapp"
                    type="tel"
                    className="lead-form__control"
                    placeholder="55 0000 0000"
                    autoComplete="tel"
                    required
                  />
                </div>

                <div className="lead-form__field">
                  <label
                    htmlFor="location"
                    className="lead-form__label"
                  >
                    ¿Dónde está el proyecto?
                  </label>

                  <input
                    id="location"
                    name="location"
                    type="text"
                    className="lead-form__control"
                    placeholder="Ej. Coyoacán, CDMX"
                    required
                  />
                </div>
              </div>

              <SelectField
                id="projectType"
                label="¿Qué quieres hacer?"
                placeholder="Selecciona una opción"
                options={content.projectTypes}
              />

              <div className="lead-form__row">
                <SelectField
                  id="spaceType"
                  label="Tipo de espacio"
                  placeholder="Selecciona"
                  options={content.spaceTypes}
                />

                <SelectField
                  id="size"
                  label="Tamaño aproximado"
                  placeholder="Selecciona"
                  options={content.sizes}
                />
              </div>

              <div className="lead-form__row">
                <SelectField
                  id="budget"
                  label="Presupuesto aproximado"
                  placeholder="Selecciona"
                  options={content.budgets}
                />

                <SelectField
                  id="timeline"
                  label="¿Cuándo quieres comenzar?"
                  placeholder="Selecciona"
                  options={content.timelines}
                />
              </div>

              <div className="lead-form__field">
                <label
                  htmlFor="message"
                  className="lead-form__label"
                >
                  Cuéntanos brevemente qué tienes en mente
                </label>

                <textarea
                  id="message"
                  name="message"
                  className="lead-form__control lead-form__textarea"
                  placeholder="Háblanos sobre el espacio y lo que te gustaría transformar..."
                  rows={5}
                  required
                />
              </div>

              <div className="lead-form__footer">
                <p className="lead-form__demo-note">
                  Demostración conceptual. Este formulario no envía información real.
                </p>

                <button
                  type="submit"
                  className="lead-form__submit"
                >
                  {content.submitLabel}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default LeadForm;