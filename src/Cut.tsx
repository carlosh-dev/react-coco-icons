import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCut = ({
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
      clipPath="url(#Cut_svg__a)"
    >
      <path d="M6.14 10.22c1.73 0 3.14-1.39 3.14-3.1C9.28 5.41 7.87 4 6.14 4 4.41 4 3 5.39 3 7.1c0 1.71 1.41 3.12 3.14 3.12v0ZM6.14 20c1.73 0 3.14-1.39 3.14-3.1 0-1.71-1.41-3.1-3.14-3.1C4.41 13.8 3 15.19 3 16.9 3 18.61 4.41 20 6.14 20v0ZM21 6.67 8.98 15.53M21 17.31 8.98 8.43" />
    </g>
    <defs>
      <clipPath id="Cut_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCut;
