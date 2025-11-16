import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import { ProductProvider } from "./components/useContext/ProductContext.tsx";
import { SortProvider } from "./components/useContext/priceSortContext.tsx";
import { IndexProvider } from "./components/useContext/IndexProductContext.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StrictMode>
      <ProductProvider>
        <SortProvider>
          <IndexProvider>
            {" "}
            <App />
          </IndexProvider>
        </SortProvider>
      </ProductProvider>
    </StrictMode>
  </BrowserRouter>
);
