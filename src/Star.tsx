import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgStar = ({
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
    <g clipPath="url(#Star_svg__a)">
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m14.96 9.05 5.05 2.02c1.33.53 1.33 1.39 0 1.92l-5.05 2.02-2.02 5.05c-.53 1.26-1.39 1.26-1.92 0L9 15.01l-5.05-2.02c-1.26-.53-1.26-1.39 0-1.92L9 9.05 11.02 4c.53-1.34 1.39-1.34 1.92 0l2.02 5.05Z"
      />
    </g>
    <defs>
      <clipPath id="Star_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgStar;
