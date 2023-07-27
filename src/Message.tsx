import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMessage = ({
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
      clipPath="url(#Message_svg__a)"
    >
      <path d="m11.09 21 3.6-3.81h3.6c1.49 0 2.7-1.21 2.7-2.7V5.71c0-1.49-1.21-2.7-2.7-2.7H5.75a2.7 2.7 0 0 0-2.7 2.69L3 14.48a2.7 2.7 0 0 0 2.7 2.72h3.59M8.11 7.93h7.76M8.11 11.53h3.88" />
    </g>
    <defs>
      <clipPath id="Message_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMessage;
