import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes.jsx";
import AuthProvider from "./provider/AuthProvider.jsx";
import TravelDataProvider from "./provider/TravelPlaceProvider.jsx";

createRoot(document.getElementById("root")).render(
   <StrictMode>
      <AuthProvider>
         <TravelDataProvider>
            <RouterProvider router={routes} />
         </TravelDataProvider>
      </AuthProvider>
   </StrictMode>
);
