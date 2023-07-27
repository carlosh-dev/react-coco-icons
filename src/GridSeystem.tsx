import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGridSeystem = ({
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
      clipPath="url(#Grid-seystem_svg__a)"
    >
      <path strokeLinecap="round" d="M21 4v16" />
      <path d="M4.85 19.5h10.31c1.01 0 1.85-.83 1.85-1.85v-2.31c0-1.02-.83-1.85-1.85-1.85H4.85c-1.01 0-1.85.83-1.85 1.85v2.31c0 1.02.83 1.85 1.85 1.85ZM8.86 10.5h6.3c1.01 0 1.85-.83 1.85-1.85V6.34c0-1.02-.83-1.85-1.85-1.85h-6.3c-1.01 0-1.85.83-1.85 1.85v2.31c0 1.02.83 1.85 1.85 1.85Z" />
    </g>
    <defs>
      <clipPath id="Grid-seystem_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGridSeystem;
