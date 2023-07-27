import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHided = ({
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
      strokeWidth={1.5}
      clipPath="url(#Hided_svg__a)"
    >
      <path
        strokeLinejoin="round"
        d="M15.18 12c0 .88-.36 1.69-.95 2.26l-4.49-4.5A3.182 3.182 0 0 1 15.18 12Z"
      />
      <path
        strokeLinejoin="round"
        d="M12 19.34c3.45 0 6.63-2.23 8.67-6.03.44-.82.44-1.81 0-2.63-2.04-3.8-5.22-6.03-8.67-6.03s-6.63 2.23-8.67 6.03c-.44.82-.44 1.81 0 2.63 2.04 3.8 5.22 6.03 8.67 6.03v0Z"
      />
      <path strokeMiterlimit={10} d="m3 3 17.95 18" />
      <path
        strokeLinejoin="round"
        d="M11.16 15.07c-1.12-.31-2-1.21-2.26-2.36"
      />
    </g>
    <defs>
      <clipPath id="Hided_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHided;
