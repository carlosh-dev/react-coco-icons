import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPrintMachine = ({
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
      clipPath="url(#Print-Machine_svg__a)"
    >
      <path d="M21 8.85v6.3c0 1.48-1.22 2.7-2.7 2.7h-1.35V16.5c0-.99-.81-1.8-1.8-1.8h-6.3c-.99 0-1.8.81-1.8 1.8v1.35H5.7c-1.48 0-2.7-1.22-2.7-2.7v-6.3c0-1.49 1.22-2.7 2.7-2.7h12.6c1.48 0 2.7 1.21 2.7 2.7Z" />
      <path d="M15.15 14.7h-6.3a1.8 1.8 0 0 0-1.8 1.8v2.7a1.8 1.8 0 0 0 1.8 1.8h6.3a1.8 1.8 0 0 0 1.8-1.8v-2.7a1.8 1.8 0 0 0-1.8-1.8ZM17.85 4.8v1.35H6.15V4.8c0-.99.81-1.8 1.8-1.8h8.1c.99 0 1.8.81 1.8 1.8ZM7.5 10.21h3.6" />
    </g>
    <defs>
      <clipPath id="Print-Machine_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPrintMachine;
