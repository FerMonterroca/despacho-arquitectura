import type { ProcessStep } from "../../types/site";
import "./Process.css";

interface ProcessProps {
  eyebrow: string;
  title: string;
  steps: ProcessStep[];
}

function Process({
  eyebrow,
  title,
  steps,
}: ProcessProps) {
  return (
    <section className="process" id="proceso">
      <div className="container">
        <div className="process__header">
          <p className="process__eyebrow">
            {eyebrow}
          </p>

          <h2 className="process__title">
            {title}
          </h2>
        </div>

        <div className="process__grid">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="process-step"
            >
              <span className="process-step__number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="process-step__content">
                <h3 className="process-step__title">
                  {step.title}
                </h3>

                <p className="process-step__description">
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;