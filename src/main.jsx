import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  RouterProvider,
} from "react-router-dom";
import router from "./Routes/Router";


ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="max-w-[1500px] mx-auto">
    <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  </div>
);