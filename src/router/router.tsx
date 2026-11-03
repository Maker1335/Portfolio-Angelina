import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import IllustrationsPage from "../pages/IllustrationsPage/IllustrationsPage";
import Layouts from "../layouts/Layouts";
import LayoutsPages from "../layouts/LayoutsPages";
import GraphicDesign from "../pages/GraphicDesign/GraphicDesign";
import Contacts from "../pages/Contacts/Contacts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
  {
    path: "/",
    element: <LayoutsPages />,
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
]);

export default router;
