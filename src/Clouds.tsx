import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgClouds = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      clipPath="url(#Clouds_svg__a)"
    >
      <path d="M21 12.59c0 .58-.11 1.16-.34 1.7-.22.54-.55 1.03-.97 1.44-.42.41-.91.74-1.46.96-.55.22-1.14.34-1.73.34h-.78a4.399 4.399 0 0 0-.07-3.31c-.24-.56-.58-1.07-1.02-1.49-.43-.42-.95-.76-1.52-.98-.57-.22-1.18-.33-1.79-.32-.93 0-1.85.26-2.62.77-.78.51-1.38 1.23-1.74 2.08-.23-.04-.47-.07-.7-.06-.72 0-1.41.22-1.98.65a6.292 6.292 0 0 1-1.26-3.78c-.05-1.52.45-3.01 1.41-4.19.96-1.19 2.32-2 3.83-2.28 1.51-.29 3.07-.03 4.41.72 1.34.75 2.35 1.95 2.88 3.38.3-.07.61-.1.92-.1a4.522 4.522 0 0 1 3.22 1.3c.42.42.76.91.98 1.46.22.55.34 1.13.33 1.72v-.01Z" />
      <path d="M16.02 15.48c0 .53-.09 1.06-.29 1.55-.34.88-.95 1.63-1.74 2.16-.79.53-1.73.81-2.68.8H6.24c-.42 0-.84-.07-1.23-.22-.4-.15-.75-.38-1.05-.67-.3-.29-.54-.64-.71-1.02-.17-.38-.25-.79-.26-1.21 0-.48.12-.96.34-1.39.23-.43.55-.8.95-1.08.57-.43 1.26-.65 1.98-.65.24 0 .47.02.7.06a4.695 4.695 0 0 1 4.36-2.85 4.637 4.637 0 0 1 4.3 2.78c.24.55.36 1.15.37 1.75l.03-.01Z" />
    </g>
    <defs>
      <clipPath id="Clouds_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgClouds;
