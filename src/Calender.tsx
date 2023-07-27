import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCalender = ({
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      clipPath="url(#Calender_svg__a)"
    >
      <path d="M16 5.7H8a4 4 0 0 0-4 4V17a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V9.7a4 4 0 0 0-4-4Z" />
      <path strokeLinecap="round" d="M8.4 3v2.7M15.6 3v2.7" />
      <path d="M20.1 10.2H3.9" />
      <path
        strokeLinecap="round"
        d="M8.29 13.8h.22M11.32 13.8h1.36M15.49 13.8h.22M8.29 17.4h1.62M12.9 17.4h-.22M15.49 17.4h.22"
      />
    </g>
    <defs>
      <clipPath id="Calender_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCalender;
