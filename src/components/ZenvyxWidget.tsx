"use client";

import Script from "next/script";

export default function ZenvyxWidget() {
  return (
    <Script
      id="zenvyx-script"
      src="https://wa-widget.zenvyx.tech/widget.js?id=696d62e291dee6df6ee529f0"
      strategy="afterInteractive"
      crossOrigin="anonymous"
    />
  );
}
