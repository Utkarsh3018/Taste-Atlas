import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-78ppa2pl352jtdum.us.auth0.com"
    clientId="KammKzY2L9k9khJSopsuAMLXvW58LIzY"
    authorizationParams={{
      redirect_uri: "https://tasteatlas-frontend.onrender.com",
    }}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
