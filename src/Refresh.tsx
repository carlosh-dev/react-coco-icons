import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgRefresh = ({
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
      clipPath="url(#Refresh_svg__a)"
    >
      <path d="M9.33 5.53c.8-.24 1.69-.39 2.67-.39 4.42 0 8 3.55 8 7.93S16.42 21 12 21s-8-3.55-8-7.93c0-1.63.5-3.15 1.35-4.41" />
      <path d="M10.75 3 9.07 5.59l2.61 1.68" />
    </g>
    <defs>
      <clipPath id="Refresh_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRefresh;
