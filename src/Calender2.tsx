import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCalender2 = ({
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
      clipPath="url(#Calender-2_svg__a)"
    >
      <path d="M15.5 5.7h-7a4 4 0 0 0-4 4V17a4 4 0 0 0 4 4h7a4 4 0 0 0 4-4V9.7a4 4 0 0 0-4-4ZM8.44 3l-.9 2.7M15.56 3l.9 2.7M19.2 11.1H4.8M11.1 15.6H8.4" />
    </g>
    <defs>
      <clipPath id="Calender-2_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCalender2;
