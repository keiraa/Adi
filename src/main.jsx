import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({
  duration: 0.8,
  smoothWheel: true,
  smoothTouch: false,
  wheelMultiplier: 1.05,
  gestureOrientation: "vertical",
  touchInertiaMultiplier: 35,
});

window.__lenis = lenis;
window.__setLenisEnabled = (enabled) => {
  if (!lenis) return;
  if (enabled) {
    lenis.start();
  } else {
    lenis.stop();
  }
};

let rafId = 0;

function raf(time) {
  lenis.raf(time);
  rafId = requestAnimationFrame(raf);
}

rafId = requestAnimationFrame(raf);
lenis.on("scroll", () => ScrollTrigger.update());
window.addEventListener("resize", () => ScrollTrigger.refresh());
gsap.ticker.lagSmoothing(0);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);