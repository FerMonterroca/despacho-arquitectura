import type { Project } from "../../types/site";
import "./ProjectGrid.css";

interface ProjectGridProps {
  title: string;
  projects: Project[];
}

function ProjectGrid({
  title,
  projects,
}: ProjectGridProps) {
  return (
    <section className="projects" id="proyectos">
      <div className="container">
        <div className="projects__header">
          <p className="projects__eyebrow">
            Proyectos seleccionados
          </p>

          <h2 className="projects__title">
            {title}
          </h2>
        </div>

        <div className="projects__grid">
          {projects.map((project) => (
            <article
              key={project.name}
              className="project-card"
            >
              <div className="project-card__visual">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    className="project-card__image"
                  />
                ) : (
                  <div className="project-card__placeholder">
                    <span>
                      Imagen conceptual
                    </span>
                  </div>
                )}
              </div>

              <div className="project-card__content">
                <div>
                  <h3 className="project-card__name">
                    {project.name}
                  </h3>

                  <p className="project-card__location">
                    {project.location}
                  </p>
                </div>

                <p className="project-card__details">
                  {project.service} · {project.size}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="projects__disclaimer">
          Proyectos mostrados como conceptos visuales para esta demostración.
        </p>
      </div>
    </section>
  );
}

export default ProjectGrid;