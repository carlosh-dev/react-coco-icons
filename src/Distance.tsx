import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDistance = ({
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
      clipPath="url(#distance_svg__a)"
    >
      <path d="M21 6.37 17.63 3l-3.37 3.37M21 17.63 17.63 21l-3.37-3.37M17.63 3.19V21M6.37 9.75c1.87 0 3.37-1.51 3.37-3.37S8.23 3.01 6.37 3.01 3 4.52 3 6.38s1.51 3.37 3.37 3.37ZM6.37 21c1.87 0 3.37-1.51 3.37-3.37s-1.51-3.37-3.37-3.37S3 15.77 3 17.63 4.51 21 6.37 21Z" />
    </g>
    <defs>
      <clipPath id="distance_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDistance;
