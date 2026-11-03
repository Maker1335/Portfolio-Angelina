import {
  bwImages,
  digitalImages,
  mascotsImages,
  tradishImages,
  graphicDesignImages,
} from "./images";

export type ProjectCategory =
  | "традиш"
  | "маскоты"
  | "ч/б"
  | "на скорую руку"
  | "диджитал";

export interface Project {
  id: string;
  title: string;
  image: string;
  category: ProjectCategory;
}

function createProjects(
  images: string[],
  category: ProjectCategory,
): Project[] {
  return images.map((image) => {
    const filename = image.split("/").pop() ?? image;

    return {
      id: image,
      title: filename.replace(/\.[^/.]+$/, ""),
      image,
      category,
    };
  });
}

export const illustrationProjects: Project[] = [
  ...createProjects(bwImages, "ч/б"),
  ...createProjects(digitalImages, "диджитал"),
  ...createProjects(tradishImages, "традиш"),
  ...createProjects(mascotsImages, "маскоты"),
];

export const graphicDesignProjects = graphicDesignImages.map((image) => {
  const filename = image.split("/").pop() ?? image;

  return {
    id: image,
    title: filename.replace(/\.[^/.]+$/, ""),
    image,
  };
});
