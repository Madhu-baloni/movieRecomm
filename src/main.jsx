import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import RouterComp from "./Componnets/RouterComp";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterComp />
  </Provider>
);
