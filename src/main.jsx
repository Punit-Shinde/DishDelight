import React from "react";
import ReactDOM from "react-dom/client";
import { SidebarProvider } from "./utils/context/sidebar.Context.jsx";
import { MealProvider } from "./utils/context/meal.Context.jsx";
import { BrowserRouter , HashRouter} from "react-router-dom";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <SidebarProvider>
    <MealProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </MealProvider>
  </SidebarProvider>
);
