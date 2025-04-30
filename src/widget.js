import React from "react";
import ReactDOM from "react-dom/client";
import ShortsWidget from "./screens/ShortsWidget";

class ShortsWidgetElement extends HTMLElement {
  async connectedCallback() {
    const userId = this.getAttribute("user-id") || "default";
    const dataUrl =
      this.getAttribute("data-url") ||
      "https://comforting-wisp-f24ab3.netlify.app/shoppableVideo.json"; // fallback

    const mountPoint = document.createElement("div");
    this.appendChild(mountPoint);

    try {
      const res = await fetch(dataUrl);
      const videos = await res.json();

      const root = ReactDOM.createRoot(mountPoint);
      root.render(<ShortsWidget userId={userId} videos={videos} />);
    } catch (err) {
      console.error("Failed to load video data:", err);
      mountPoint.innerHTML = "<p>Failed to load videos.</p>";
    }
  }
}

if (!customElements.get("shorts-widget")) {
  customElements.define("shorts-widget", ShortsWidgetElement);
}
