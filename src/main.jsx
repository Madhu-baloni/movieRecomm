import { createRoot } from "react-dom/client";
import RouterComp from "./Componnets/RouterComp";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "./index.css";
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterComp />
  </Provider>
);
