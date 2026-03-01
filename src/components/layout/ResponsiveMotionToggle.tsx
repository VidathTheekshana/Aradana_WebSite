"use client";

import { useEffect } from "react";

export function ResponsiveMotionToggle() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const mq = window.matchMedia("(max-width: 767px)");
    const apply = () => {
      if (mq.matches) {
        document.body.classList.add("is-mobile");
      } else {
        document.body.classList.remove("is-mobile");
      }
    };

    apply();
    mq.addEventListener?.("change", apply);
    return () => mq.removeEventListener?.("change", apply);
  }, []);

  return null;
}
