"use client";

import Script from "next/script";

export function HubSpotForm() {
  return (
    <>
      <div
        className="hs-form-frame"
        data-region="na2"
        data-form-id="245a30d4-7055-4d7a-9df2-a7d84173d3e5"
        data-portal-id="244871017"
      />
      <Script
        src="https://js-na2.hsforms.net/forms/embed/244871017.js"
        strategy="afterInteractive"
      />
    </>
  );
}
