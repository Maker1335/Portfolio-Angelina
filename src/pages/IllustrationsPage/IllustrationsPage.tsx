import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Masonry from "react-masonry-css";
import {
  illustrationProjects,
  type ProjectCategory,
} from "../../data/projects";
import "./IllustrationsPage.scss";

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
  1000: 3,
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

  useEffect(() => {
    if (!selectedImage) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedImage(null);
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
    <main className="illustrations-page">
      <div
        className="illustrations-page__filters"
        role="group"
        aria-label="Фильтр категорий"
      >
        {categories.map((category) => (
          <button
            type="button"
            key={category}
            className={`illustrations-page__filter-btn ${
              activeCategory === category
                ? "illustrations-page__filter-btn--active"
                : ""
            }`}
            aria-pressed={activeCategory === category}
            onClick={() => changeCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <Masonry
        breakpointCols={breakpointColumns}
        className="illustrations-page__gallery"
        columnClassName="illustrations-page__gallery-column"
      >
        {visibleProjects.map((project) => (
          <img
            key={project.id}
            className="illustrations-page__gallery-item"
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

      {hasMore ? (
        <div className="illustrations-page__load-more-container">
          <button
            type="button"
            className="illustrations-page__load-more-btn"
            onClick={loadMore}
          >
            Загрузить ещё
          </button>
        </div>
      ) : (
        filteredProjects.length > 0 && (
          <div className="illustrations-page__footer">
            <NavLink to="/" className="illustrations-page__back-button">
              Вернуться на главную
            </NavLink>
          </div>
        )
      )}

      {filteredProjects.length === 0 && (
        <div className="illustrations-page__empty-state">
          <p>В этой категории пока нет работ.</p>
          <NavLink to="/" className="illustrations-page__back-button">
            Вернуться на главную
          </NavLink>
        </div>
      )}

      {selectedImage && (
        <div
          className="illustrations-page__modal"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Просмотр изображения"
        >
          <button
            type="button"
            className="illustrations-page__modal-close"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
            aria-label="Закрыть изображение"
          >
            ✕
          </button>

          <img
            className="illustrations-page__modal-image"
            src={selectedImage}
            alt="Увеличенное изображение"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </main>
  );
}

export default IllustrationsPage;
