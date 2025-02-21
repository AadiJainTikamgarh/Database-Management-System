import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./Store/store.js";
import { MantineProvider } from "@mantine/core";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <MantineProvider>
        <div className="w-dvw h-dvh overflow-hidden">
          <App />
        </div>
      </MantineProvider>
    </Provider>
  </StrictMode>
);
