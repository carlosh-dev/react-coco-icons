import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLaptopAndPhone = ({
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
      clipPath="url(#Laptop_and_phone_svg__a)"
    >
      <path d="M10.2 19.67H5.7c-1.49 0-2.7-1.19-2.7-2.66v-.89a.9.9 0 0 1 .9-.89h3.23c.24 0 .47.1.64.26l1.27 1.25c.17.17.4.26.64.26h.52M4.35 15.05V5.41C4.35 4.08 5.6 3 7.13 3h9.28c1.54 0 2.78 1.08 2.78 2.41v3.17" />
      <path d="M19 8.58h-4.1a2 2 0 0 0-2 2V19a2 2 0 0 0 2 2H19a2 2 0 0 0 2-2v-8.42a2 2 0 0 0-2-2ZM16.5 18.34h.9" />
    </g>
    <defs>
      <clipPath id="Laptop_and_phone_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLaptopAndPhone;
