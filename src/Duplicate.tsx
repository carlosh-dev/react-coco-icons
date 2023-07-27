import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDuplicate = ({
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
    <g stroke="#000" strokeWidth={1.5} clipPath="url(#Duplicate_svg__a)">
      <path d="M14.7 6.6v2.7h-1.8a3.61 3.61 0 0 0-3.6 3.6v1.8H6.6A3.61 3.61 0 0 1 3 11.1V6.6C3 4.62 4.62 3 6.6 3h4.5c1.98 0 3.6 1.62 3.6 3.6Z" />
      <path d="M17.4 9.3h-4.5a3.6 3.6 0 0 0-3.6 3.6v4.5a3.6 3.6 0 0 0 3.6 3.6h4.5a3.6 3.6 0 0 0 3.6-3.6v-4.5a3.6 3.6 0 0 0-3.6-3.6Z" />
    </g>
    <defs>
      <clipPath id="Duplicate_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDuplicate;
