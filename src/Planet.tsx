import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPlanet = ({
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
      clipPath="url(#Planet_svg__a)"
    >
      <path d="M13.19 13c2.67 0 4.83-2.24 4.83-5s-2.16-5-4.83-5-4.83 2.24-4.83 5 2.16 5 4.83 5Z" />
      <path d="M5.63 3.59A9.128 9.128 0 0 0 4.5 8c0 1.8.52 3.56 1.5 5.05a8.786 8.786 0 0 0 3.98 3.31c1.62.67 3.39.82 5.08.43 1.7-.39 3.25-1.29 4.44-2.6M13.19 17v4M10.29 21h5.8" />
    </g>
    <defs>
      <clipPath id="Planet_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPlanet;
