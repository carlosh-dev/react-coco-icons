import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgUserCircle = ({
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
      clipPath="url(#User-Circle_svg__a)"
    >
      <path d="M12 12.36c1.34 0 2.43-1.09 2.43-2.43S13.34 7.5 12 7.5 9.57 8.59 9.57 9.93s1.09 2.43 2.43 2.43ZM9.37 16.5c1.18-1.99 4.05-2 5.25-.02v.02" />
      <path d="M21 12a9 9 0 1 0-18 0 9 9 0 0 0 18 0Z" />
    </g>
    <defs>
      <clipPath id="User-Circle_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgUserCircle;
