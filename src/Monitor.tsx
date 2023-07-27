import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMonitor = ({
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
      clipPath="url(#Monitor_svg__a)"
    >
      <path d="M18.3 17.4H5.7c-1.49 0-2.7-1.21-2.7-2.7v-9C3 4.21 4.21 3 5.7 3h12.6C19.79 3 21 4.21 21 5.7v9c0 1.49-1.21 2.7-2.7 2.7ZM3 12.9h18M13.8 17.4h-3.6V21h3.6v-3.6ZM8.4 21h7.2" />
    </g>
    <defs>
      <clipPath id="Monitor_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMonitor;
