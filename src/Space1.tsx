import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSpace1 = ({
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
      clipPath="url(#Space-1_svg__a)"
    >
      <path d="m16.85 17.67-4.51-4.51c-.3-.31-.48-.72-.48-1.16 0-.44.18-.85.48-1.16l4.51-4.51c.17-.18.37-.32.6-.41.23-.09.48-.12.73-.1.25.03.48.11.69.24.21.13.38.31.51.53A9.841 9.841 0 0 1 21 12.01c0 1.93-.56 3.81-1.62 5.42-.13.21-.3.39-.51.52-.21.13-.45.21-.69.24-.25.02-.5 0-.73-.1-.23-.1-.43-.23-.6-.42Z" />
      <path d="M16.13 16.95a7.459 7.459 0 0 1-3.82 2.33 7.471 7.471 0 0 1-7.97-3.01A7.476 7.476 0 0 1 3 12a7.5 7.5 0 0 1 1.34-4.27 7.548 7.548 0 0 1 3.51-2.75 7.5 7.5 0 0 1 8.28 2.07" />
    </g>
    <defs>
      <clipPath id="Space-1_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSpace1;
