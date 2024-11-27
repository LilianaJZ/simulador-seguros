import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import { router } from "./routes/routerPrincipal";

let rutas = createBrowserRouter(router);

createRoot(document.getElementById("root")).render(
  <StrictMode>

   {/* este router, es una palabra reservada para este atributo, es un parametro propio de la funcion de RouterProvider. */}
    <RouterProvider router={rutas}/>
  </StrictMode>
);
