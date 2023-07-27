import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgReport2 = ({
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
    <g stroke="#000" strokeLinecap="round" clipPath="url(#Report-2_svg__a)">
      <path
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 13.8V6.59c0-1.98 1.62-3.6 3.6-3.6h10.8c1.98 0 3.6 1.62 3.6 3.6v7.21c0 1.98-1.62 3.6-3.6 3.6h-1.45a.9.9 0 0 0-.64.26l-3.32 3.32-3.32-3.32a.9.9 0 0 0-.64-.26H6.58a3.61 3.61 0 0 1-3.6-3.6H3ZM12 7.49v3.43"
      />
      <path strokeWidth={2} d="M12 13.5h.01" />
    </g>
    <defs>
      <clipPath id="Report-2_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgReport2;
