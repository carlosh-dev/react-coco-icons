import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgShop = ({
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
      clipPath="url(#Shop_svg__a)"
    >
      <path d="M16.92 7.5 16.04 21 4.32 19.79a.897.897 0 0 1-.79-1.09L5.99 7.5h10.93v0Z" />
      <path d="M20.1 18.25 16.03 21l.88-13.5 2.72.87.86 9.05c.03.33-.12.64-.39.83ZM8.11 8.71l.37-3.05c.2-1.65 1.76-2.83 3.49-2.64 1.73.19 2.97 1.68 2.77 3.33l-.31 2.59" />
    </g>
    <defs>
      <clipPath id="Shop_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgShop;
