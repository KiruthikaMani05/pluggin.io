import React from "react";
import ReactDOM from "react-dom/client";
import ShortsWidget from "../screens/ShortsWidget";

class ShortsWidgetElement extends HTMLElement {
  connectedCallback() {
    const userId = this.getAttribute("user-id") || "default";

    const mountPoint = document.createElement("div");
    this.appendChild(mountPoint);

    const root = ReactDOM.createRoot(mountPoint);
    root.render(<ShortsWidget userId={userId} />);
  }
}

customElements.define("shorts-widget", ShortsWidgetElement);
