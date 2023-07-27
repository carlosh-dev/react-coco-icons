import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSticker = ({
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
      clipPath="url(#Sticker_svg__a)"
    >
      <path d="M21 5.7v7.69c-.13.44-.36.84-.69 1.17l-5.74 5.74c-.33.33-.73.57-1.17.69H5.7c-1.48 0-2.7-1.22-2.7-2.7V5.69c0-1.49 1.22-2.7 2.7-2.7h12.6c1.48 0 2.7 1.21 2.7 2.7v.01Z" />
      <path d="M7.26 8.58a1.71 1.71 0 1 0 3.42 0M12.83 8.58c0 .95.76 1.71 1.71 1.71s1.71-.76 1.71-1.71M21 13.39c-.13.44-.36.84-.69 1.17l-5.74 5.74c-.33.33-.73.57-1.17.69a5.379 5.379 0 0 1-1.27-3.47v-.1c0-1.13.38-2.19 1-3.04a5.384 5.384 0 0 1 4.39-2.26c1.32 0 2.54.48 3.47 1.27H21Z" />
      <path d="M13.13 14.38c-.62.86-.99 1.91-1 3.04-.47.05-.94.02-1.39-.11-1.4-.38-2.52-1.53-2.98-3.03-.05-.13.05-.28.19-.28 1.7.41 3.45.53 5.17.38h.01Z" />
    </g>
    <defs>
      <clipPath id="Sticker_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSticker;
