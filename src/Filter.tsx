import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFilter = ({
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
      clipPath="url(#Filter_svg__a)"
    >
      <path d="M6.15 3h11.7c.38 0 .76.1 1.09.28.32.19.6.45.79.77a2.031 2.031 0 0 1-.04 2.09L16 11.97c-.51.81-.79 1.74-.79 2.69v4.12c0 1.94-1.42 2.73-3.17 1.82l-2.13-1.12c-.32-.19-.6-.46-.8-.78-.19-.32-.3-.67-.32-1.04v-3c0-.95-.27-1.88-.79-2.69L4.32 6.14a2.031 2.031 0 0 1-.04-2.09c.19-.32.46-.59.79-.77.33-.19.71-.28 1.09-.28h-.01ZM9.85 3.01l5.86 9.45" />
    </g>
    <defs>
      <clipPath id="Filter_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFilter;
