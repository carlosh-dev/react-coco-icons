import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMaximize1 = ({
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
    <g stroke="#000" strokeWidth={1.5} clipPath="url(#Maximize-1_svg__a)">
      <path
        strokeMiterlimit={10}
        d="M17.5 3H6.49c-1.93 0-3.5 1.57-3.5 3.5v11.01c0 1.93 1.56 3.5 3.5 3.5H17.5c1.93 0 3.5-1.57 3.5-3.5V6.5C21 4.57 19.44 3 17.5 3Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 13v4h4M16.99 11.01v-4h-4"
      />
      <path strokeLinecap="round" strokeMiterlimit={10} d="m12 12 4.4-4.4" />
    </g>
    <defs>
      <clipPath id="Maximize-1_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMaximize1;
