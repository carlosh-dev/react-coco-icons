import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGift = ({
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
      clipPath="url(#Gift_svg__a)"
    >
      <path d="M4.35 12h15.3v6c0 1.66-1.34 3-3 3h-9.3c-1.66 0-3-1.34-3-3v-6ZM20 8.4H4a1 1 0 0 0-1 1V11a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V9.4a1 1 0 0 0-1-1Z" />
      <path d="M13.58 12h-3.15v9h3.15v-9ZM9.76 8.27c2.16.42 2.7-.1 2.29-2.29-.48-2.56-3.01-3.85-4.55-2.32-1.56 1.53-.28 4.12 2.26 4.61v0Z" />
      <path d="M14.59 8.27c-2.16.42-2.7-.1-2.29-2.29.48-2.56 3.01-3.85 4.55-2.32 1.56 1.53.28 4.12-2.26 4.61v0Z" />
    </g>
    <defs>
      <clipPath id="Gift_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGift;
