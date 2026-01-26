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
    script.setAttribute("data-settings-id", "696d62e291dee6df6ee529f0");

    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return null;
}
