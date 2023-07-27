import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLtrGrid = ({
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
      strokeMiterlimit={10}
      strokeWidth={1.5}
      clipPath="url(#LTR-Grid_svg__a)"
    >
      <path strokeLinecap="round" d="M3 4v16" />
      <path d="M19.15 13.5H8.84c-1.02 0-1.85.83-1.85 1.85v2.31c0 1.02.83 1.85 1.85 1.85h10.31c1.02 0 1.85-.83 1.85-1.85v-2.31c0-1.02-.83-1.85-1.85-1.85ZM15.15 4.5h-6.3C7.83 4.5 7 5.33 7 6.35v2.31c0 1.02.83 1.85 1.85 1.85h6.3c1.02 0 1.85-.83 1.85-1.85V6.35c0-1.02-.83-1.85-1.85-1.85Z" />
    </g>
    <defs>
      <clipPath id="LTR-Grid_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLtrGrid;
