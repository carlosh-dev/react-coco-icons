import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFindNear = ({
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
      clipPath="url(#Find-near_svg__a)"
    >
      <path d="M4.62 17.15a9.054 9.054 0 0 1-1.6-4.57c-.11-1.64.24-3.28 1-4.74A9.114 9.114 0 0 1 7.34 4.3a9.034 9.034 0 0 1 9.34 0c1.41.85 2.55 2.08 3.32 3.54.76 1.46 1.11 3.1 1 4.74a9.054 9.054 0 0 1-1.6 4.57" />
      <path d="M8.73 14.29C8.26 13.62 8 12.82 8 12c0-1.06.42-2.07 1.17-2.82a3.98 3.98 0 0 1 5.64 0A3.98 3.98 0 0 1 15.98 12c0 .82-.26 1.62-.73 2.29M9 20.99v-1c0-.79.31-1.56.88-2.12.56-.56 1.33-.88 2.12-.88s1.56.32 2.12.88.88 1.32.88 2.12V21" />
    </g>
    <defs>
      <clipPath id="Find-near_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFindNear;
