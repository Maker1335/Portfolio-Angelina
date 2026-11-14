import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Masonry from "react-masonry-css";
import { graphicDesignProjects } from "../../data/projects";
import "./GraphicDesign.scss";

const breakpointColumns = {
  default: 4,
  1200: 4,
  1000: 3,
  600: 2,
};

function GraphicDesignPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  useEffect(() => {
    if (!selectedImage) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedImage]);

  return (
    <main className="graphic-design-page">
      <Masonry
        breakpointCols={breakpointColumns}
        className="graphic-design-page__gallery"
        columnClassName="graphic-design-page__gallery-column"
      >
        {graphicDesignProjects.map((project) => (
          <img
            key={project.id}
            className="graphic-design-page__gallery-item"
            src={project.image}
            alt={project.title}
            loading="lazy"
            onClick={() => setSelectedImage(project.image)}
            tabIndex={0}
            role="button"
            aria-label={`Открыть изображение: ${project.title}`}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                setSelectedImage(project.image);
              }
            }}
          />
        ))}
      </Masonry>

      {selectedImage && (
        <div
          className="graphic-design-page__modal"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Просмотр изображения"
        >
          <button
            type="button"
            className="graphic-design-page__modal-close"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
            aria-label="Закрыть изображение"
          >
            ✕
          </button>

          <img
            className="graphic-design-page__modal-image"
            src={selectedImage}
            alt="Увеличенное изображение"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <div className="graphic-design-page__footer">
        <NavLink to="/" className="graphic-design-page__back-button">
          Вернуться на главную
        </NavLink>
      </div>
    </main>
  );
}

export default GraphicDesignPage;
