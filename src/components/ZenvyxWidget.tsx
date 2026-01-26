"use client";

import { useEffect } from "react";

export default function ZenvyxWidget() {
  useEffect(() => {
    // Prevent duplicate injection on re-renders
    if (document.getElementById("zenvyx-script")) return;

    const script = document.createElement("script");
    script.id = "zenvyx-script";
    script.src = "https://wa-widget.zenvyx.tech/widget.js";
    script.async = true;
    script.crossOrigin = "anonymous";
    script.setAttribute("data-settings-id", "6977253c58cc288725a9df43");

    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return null;
}
