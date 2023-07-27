import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgVr = ({
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
      clipPath="url(#VR_svg__a)"
    >
      <path d="M5.55 7.01C6.03 6 6.74 5.11 7.63 4.43a6.999 6.999 0 0 1 9.19.58c.57.58 1.04 1.26 1.37 2M18.87 11.95V14a6.995 6.995 0 0 1-7 6.99 7.001 7.001 0 0 1-7-6.99v-2.05" />
      <path d="M18.37 7.01h-13a2.5 2.5 0 0 0 0 5h13a2.5 2.5 0 0 0 0-5ZM12.87 16.99h-2" />
    </g>
    <defs>
      <clipPath id="VR_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgVr;
