import { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import {
  illustrationProjects,
  type ProjectCategory,
} from "../../data/projects";
import "./IllustrationsPage.scss";
import { NavLink } from "react-router-dom";

const INITIAL_COUNT = 12;
const LOAD_COUNT = 12;

const categories: (ProjectCategory | "все")[] = [
  "все",
  "ч/б",
  "диджитал",
  "традиш",
  "маскоты",
];

const breakpointColumns = {
  default: 4,
  1200: 4,
  900: 3,
  600: 2,
};

function IllustrationsPage() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | "все">(
    "все",
  );

  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredProjects =
    activeCategory === "все"
      ? illustrationProjects
      : illustrationProjects.filter(
          (project) => project.category === activeCategory,
        );

  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  const loadMore = () => {
    setVisibleCount((current) =>
      Math.min(current + LOAD_COUNT, filteredProjects.length),
    );
  };

  const changeCategory = (category: ProjectCategory | "все") => {
    setActiveCategory(category);
    setVisibleCount(INITIAL_COUNT);
  };

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
    <main className="illustrations-page">
      <div className="filter-bar">
        {categories.map((category) => (
          <button
            type="button"
            key={category}
            className={activeCategory === category ? "active" : ""}
            onClick={() => changeCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <Masonry
        breakpointCols={breakpointColumns}
        className="gallery"
        columnClassName="gallery-column"
      >
        {visibleProjects.map((project) => (
          <img
            key={project.id}
            className="gallery-item"
            src={project.image}
            alt={project.title}
            title={project.title}
            loading="lazy"
            role="button"
            tabIndex={0}
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

      {hasMore && (
        <div className="load-more-container">
          <button type="button" className="load-more-button" onClick={loadMore}>
            Загрузить ещё
          </button>
        </div>
      )}

      {!hasMore && filteredProjects.length > 0 && (
        <p className="gallery-end">
          <NavLink to="/">Вернуться на главный экран</NavLink>
        </p>
      )}

      {/* {filteredProjects.length === 0 && <p>В этой категории пока нет работ.</p>} */}
      {filteredProjects.length === 0 && (
        <NavLink to="/">Вернуться на главный экран</NavLink>
      )}

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
    </main>
  );
}

export default IllustrationsPage;
