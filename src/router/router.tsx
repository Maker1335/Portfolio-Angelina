import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import IllustrationsPage from "../pages/IllustrationsPage/IllustrationsPage";
import MainLayout from "../layouts/MainLayout";
import PagesLayout from "../layouts/PagesLayout";
import GraphicDesign from "../pages/GraphicDesign/GraphicDesign";
import Contacts from "../pages/Contacts/Contacts";
import NotFound from "../pages/NotFound/NotFound";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
      ],
    },
    {
      element: <PagesLayout />,
      children: [
        {
          path: "Illustrations",
          element: <IllustrationsPage />,
        },
        {
          path: "GraphicDesign",
          element: <GraphicDesign />,
        },
        {
          path: "Contacts",
          element: <Contacts />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  },
);

export default router;
