import { createRoot } from "react-dom/client";
import Modal from "react-modal";
import App from "./App";
import "./index.css";

// Set the app element for react-modal
Modal.setAppElement("#root");

createRoot(document.getElementById("root")!).render(<App />);
