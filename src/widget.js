import React from "react";
import ReactDOM from "react-dom/client";
import ShortsWidget from "./screens/ShortsWidget";

class ShortsWidgetElement extends HTMLElement {
  async connectedCallback() {
    // userId to fetch video data
    const userId = this.getAttribute("user-id") || "default";

    // url to fetch video data
    const dataUrl =
      this.getAttribute("data-url") ||
      "https://shoppablevideo.netlify.app/shoppableVideo.json";

    const mountPoint = document.createElement("div");
    this.appendChild(mountPoint);

    // style and className attributes
    const styleString = this.getAttribute("data-style") || "";
    const className = this.getAttribute("data-class") || "";

    // Convert inline CSS string to style object
    const style = styleString.split(";").reduce((acc, rule) => {
      const [key, value] = rule.split(":");
      if (key && value) {
        const jsKey = key
          .trim()
          .replace(/-([a-z])/g, (_, char) => char.toUpperCase());
        acc[jsKey] = value.trim();
      }
      return acc;
    }, {});

    const videoStyleStr = this.getAttribute("data-video-style") || "";

    const videoStyle = videoStyleStr.split(";").reduce((acc, rule) => {
      const [key, value] = rule.split(":");
      if (key && value) {
        const jsKey = key
          .trim()
          .replace(/-([a-z])/g, (_, char) => char.toUpperCase());
        acc[jsKey] = value.trim();
      }
      return acc;
    }, {});

    try {
      const res = await fetch(dataUrl);
      const videos = await res.json();

      const root = ReactDOM.createRoot(mountPoint);
      root.render(
        <shorts-widget
          userId={userId}
          videos={videos}
          style={style}
          className={className}
          videoStyle={videoStyle}
        />
      );
    } catch (err) {
      console.error("Failed to load video data:", err);
      mountPoint.innerHTML = "<p>Failed to load videos.</p>";
    }
  }
}

if (!customElements.get("shorts-widget")) {
  customElements.define("shorts-widget", ShortsWidgetElement);
}
