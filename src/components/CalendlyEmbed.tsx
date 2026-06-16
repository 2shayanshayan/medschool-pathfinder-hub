import { useEffect } from "react";

const CALENDLY_URL = "https://calendly.com/shayanali41256/30min";

export function CalendlyEmbed({ height = 720 }: { height?: number }) {
  useEffect(() => {
    const existing = document.querySelector(
      'script[src="https://assets.calendly.com/assets/external/widget.js"]'
    );
    if (existing) return;

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      data-url={`${CALENDLY_URL}?hide_gdpr_banner=1&background_color=ffffff&text_color=333333&primary_color=3d6b7a`}
      style={{ minWidth: "320px", height: `${height}px` }}
    />
  );
}
