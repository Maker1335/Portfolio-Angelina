const graphicDesign = import.meta.glob<string>(
  "../assets/images/GraphicDesign/*.{png,jpg,jpeg,webp}",
  {
    eager: true,
    import: "default",
  },
);

const illustrationsBw = import.meta.glob<string>(
  "../assets/images/Illustrations/bw/*.{png,jpg,jpeg,webp}",
  {
    eager: true,
    import: "default",
  },
);

const illustrationsDigital = import.meta.glob<string>(
  "../assets/images/Illustrations/digital/*.{png,jpg,jpeg,webp}",
  {
    eager: true,
    import: "default",
  },
);

const illustrationsMascots = import.meta.glob<string>(
  "../assets/images/Illustrations/mascots/*.{png,jpg,jpeg,webp}",
  {
    eager: true,
    import: "default",
  },
);

const illustrationsTradish = import.meta.glob<string>(
  "../assets/images/Illustrations/tradish/*.{png,jpg,jpeg,webp}",
  {
    eager: true,
    import: "default",
  },
);

export const graphicDesignImages = Object.values(graphicDesign);
export const bwImages = Object.values(illustrationsBw);
export const digitalImages = Object.values(illustrationsDigital);
export const mascotsImages = Object.values(illustrationsMascots);
export const tradishImages = Object.values(illustrationsTradish);
