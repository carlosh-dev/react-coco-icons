import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLoading = ({
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
      clipPath="url(#Loading_svg__a)"
    >
      <path d="M13.79 20.69c-.76.2-1.55.31-2.38.31-3.38 0-6.32-1.8-7.91-4.47M20.5 13.1a8.9 8.9 0 0 1-1.66 4.17M3.5 7.49A9.183 9.183 0 0 1 11.42 3a9.171 9.171 0 0 1 7.53 3.89" />
    </g>
    <defs>
      <clipPath id="Loading_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLoading;
