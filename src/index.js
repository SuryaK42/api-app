import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
// import store from "./Books/store";
// import { store } from "./Middlewere/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
// npx json-server --watch server/db.json --port 8000
// https://randomuser.me/api/
// "http://localhost:8000/tasks"
