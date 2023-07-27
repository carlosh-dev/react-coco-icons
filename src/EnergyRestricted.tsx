import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgEnergyRestricted = ({
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
      clipPath="url(#Energy-Restricted_svg__a)"
    >
      <path d="m17.92 13.61-2.03 2.29-8.04-8.04 2.21-4.34c.15-.31.48-.52.83-.52h4.21c.74.02 1.18.78.85 1.39l-2.81 5.07c-.28.53-.04 1.15.52 1.34l3.85 1.3c.63.22.85 1.02.4 1.5l.01.01ZM3 3l18 18M6.31 10.9l-.37.73a.92.92 0 0 0 .52 1.3l4.23 1.5c.41.15.68.58.61 1.02l-.71 4.95c-.06.5.57.81.93.41l2.05-2.31" />
    </g>
    <defs>
      <clipPath id="Energy-Restricted_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgEnergyRestricted;
