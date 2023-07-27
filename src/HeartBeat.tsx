import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHeartBeat = ({
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
      clipPath="url(#heart-beat_svg__a)"
    >
      <path d="M4.87 5a5.147 5.147 0 0 1 7.11-.13c.95-.88 2.2-1.36 3.49-1.37.75.03 1.5.21 2.18.53.69.32 1.31.77 1.82 1.33.52.56.91 1.21 1.17 1.92.26.71.38 1.47.35 2.23 0 .85-.16 1.7-.49 2.48a6.22 6.22 0 0 1-1.44 2.08l-.13.12-7 6.32-1.65-1.5" />
      <path d="M14.97 12h-1.99L9.99 9l-4 6L3 11.86" />
    </g>
    <defs>
      <clipPath id="heart-beat_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHeartBeat;
