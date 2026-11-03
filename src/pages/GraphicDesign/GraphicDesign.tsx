import Masonry from "react-masonry-css";
import { graphicDesignProjects } from "../../data/projects";
import "./GraphicDesign.scss";
import { useEffect, useState } from "react";

const breakpointColumns = {
  default: 4,
  1200: 3,
  700: 2,
};

function GraphicDesign() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Закрытие изображения клавишей Escape
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

  // Запрет прокрутки страницы при открытом изображении
  useEffect(() => {
    if (!selectedImage) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedImage]);
  return (
    <div className="GraphicDesign">
      <Masonry
        breakpointCols={breakpointColumns}
        className="gallery"
        columnClassName="gallery-column"
      >
        {graphicDesignProjects.map((project) => (
          <img
            key={project.id}
            className="gallery-item"
            src={project.image}
            alt={project.title}
            loading="lazy"
            onClick={() => setSelectedImage(project.image)}
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
        <div className="image-modal" onClick={() => setSelectedImage(null)}>
          <button
            type="button"
            className="image-modal__close"
            onClick={() => setSelectedImage(null)}
            aria-label="Закрыть изображение"
          >
            ×
          </button>

          <img
            src={selectedImage}
            alt="Увеличенное изображение"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}

export default GraphicDesign;
