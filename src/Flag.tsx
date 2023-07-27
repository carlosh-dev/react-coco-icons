import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFlag = ({
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
      clipPath="url(#Flag_svg__a)"
    >
      <path d="M4.5 3.19V21M4.5 3.19c1.71.59 4.5 1.31 7.94 1.13 3.07-.17 4.42-1.87 5.68-1.13 1.77 1.05 1.91 6.64 0 9-2.3 2.83-7.97 3.16-13.62 0" />
    </g>
    <defs>
      <clipPath id="Flag_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFlag;
