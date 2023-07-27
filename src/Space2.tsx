import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSpace2 = ({
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
      strokeMiterlimit={10}
      strokeWidth={1.5}
      clipPath="url(#Space-2_svg__a)"
    >
      <path d="M17.95 12.65c0 .28.06.55.06.83 0 1.49-.43 2.94-1.26 4.18a7.454 7.454 0 0 1-3.36 2.77c-1.37.57-2.88.72-4.34.43s-2.8-1-3.85-2.05a7.58 7.58 0 0 1-2.05-3.85 7.41 7.41 0 0 1 .42-4.34 7.459 7.459 0 0 1 2.76-3.37 7.494 7.494 0 0 1 4.17-1.27c.28 0 .55.02.83.05" />
      <path d="M19.35 12.65h-6.39c-.43 0-.85-.17-1.15-.48-.3-.31-.48-.72-.48-1.16V4.66c0-.25.03-.49.13-.72.1-.23.25-.43.44-.58.19-.16.42-.27.66-.32.24-.05.49-.05.73.01 1.88.39 3.62 1.32 4.98 2.68a9.882 9.882 0 0 1 2.68 4.99c.06.24.06.48 0 .72s-.17.46-.32.64c-.16.19-.35.34-.57.43-.23.1-.47.15-.71.14Z" />
    </g>
    <defs>
      <clipPath id="Space-2_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSpace2;
