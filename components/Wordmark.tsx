import Image from "next/image";

interface WordmarkProps {
  href?: string;
  inverted?: boolean;
  size?: "default" | "small";
}

export function Wordmark({ href = "#top", inverted = false, size = "default" }: WordmarkProps) {
  const src = inverted
    ? "/assets/sage-summit-logo-white-header.png"
    : "/assets/sage-summit-logo-header.png";

  // Header logo is 509 x 200 native (already trimmed); display at ~44px tall
  const displayHeight = size === "small" ? 36 : 44;
  const displayWidth = Math.round(displayHeight * (509 / 200));

  return (
    <a
      className={`wordmark ${inverted ? "wordmark--inv" : ""}`}
      href={href}
      aria-label="Sage Summit Capital — home"
    >
      <Image
        src={src}
        width={displayWidth}
        height={displayHeight}
        priority
        alt="Sage Summit Capital"
        className="wordmark__img"
      />
    </a>
  );
}
