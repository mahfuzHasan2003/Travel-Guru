import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import News from "../pages/News";
import Destination from "../pages/Destination";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Home from "../pages/Home";

const routes = createBrowserRouter([
   {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
         {
            path: "/",
            element: <Home />,
         },
         {
            path: "/news",
            element: <News />,
         },
         {
            path: "/destination",
            element: <Destination />,
         },
         {
            path: "/blog",
            element: <Blog />,
         },
         {
            path: "/contact",
            element: <Contact />,
         },
      ],
   },
   {
      path: "*",
      element: <h1>Error</h1>,
   },
]);

export default routes;
