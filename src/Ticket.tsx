import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTicket = ({
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
      clipPath="url(#Ticket_svg__a)"
    >
      <path d="M18.62 12a2.355 2.355 0 0 0 2.36 2.35v1.87c0 .87-.35 1.7-.97 2.32-.62.62-1.46.96-2.34.97H6.3c-.88 0-1.72-.35-2.34-.97-.62-.62-.97-1.45-.97-2.32v-1.87A2.356 2.356 0 0 0 5.21 12a2.356 2.356 0 0 0-2.22-2.35V7.78c0-.87.35-1.7.97-2.32a3.35 3.35 0 0 1 2.34-.97h11.38c.88 0 1.72.35 2.34.97.62.62.97 1.45.97 2.32v1.87c-.63 0-1.23.25-1.68.69-.45.44-.7 1.04-.7 1.66h.01Z" />
      <path strokeLinecap="round" d="M10.05 9.66v4.68" />
    </g>
    <defs>
      <clipPath id="Ticket_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTicket;
