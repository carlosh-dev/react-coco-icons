import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgClock4 = ({
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
      clipPath="url(#Clock-4_svg__a)"
    >
      <path
        strokeLinejoin="round"
        d="M5.63 18.36a8.977 8.977 0 0 0 10.86 1.44 9 9 0 0 0 4.2-10.12A8.989 8.989 0 0 0 12 3.01"
      />
      <path d="M3 12h.01M8.5 3.5h.01M3.68 15.38h.01M3.68 8.53h.01M5.62 5.62h.01" />
      <path strokeLinejoin="round" d="M11.32 8.4v4.05l2.71 2.7" />
    </g>
    <defs>
      <clipPath id="Clock-4_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgClock4;
