import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTinyHome = ({
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
      clipPath="url(#Tiny-home_svg__a)"
    >
      <path d="M19.3 10.79c-4.85-.51-9.74-.51-14.59 0a1.562 1.562 0 0 1-1.35-.51 1.49 1.49 0 0 1-.33-.65c-.06-.24-.05-.49.02-.73l.83-3.25c.19-.76.64-1.43 1.27-1.91S6.55 3 7.36 3h9.29c.79 0 1.57.26 2.2.74.63.48 1.07 1.15 1.27 1.91l.83 3.25c.07.24.08.48.02.72-.05.24-.16.46-.33.65-.15.19-.37.33-.6.42-.23.09-.48.12-.74.09v.01Z" />
      <path d="M19.15 10.78v6.73c0 .93-.38 1.81-1.05 2.47-.67.65-1.58 1.02-2.52 1.02H8.43c-.95 0-1.86-.37-2.52-1.02a3.427 3.427 0 0 1-1.04-2.46v-6.73" />
      <path d="M11.87 15.02h.27c.64 0 1.26.25 1.71.69.45.44.71 1.04.71 1.67V21H9.45v-3.62c0-.63.25-1.23.71-1.67.45-.44 1.07-.69 1.71-.69v0Z" />
    </g>
    <defs>
      <clipPath id="Tiny-home_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTinyHome;
