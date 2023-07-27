import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLock2 = ({
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
      clipPath="url(#Lock-2_svg__a)"
    >
      <path d="M15.5 8.4h-7a4 4 0 0 0-4 4V17a4 4 0 0 0 4 4h7a4 4 0 0 0 4-4v-4.6a4 4 0 0 0-4-4ZM8.39 8.4V4.8c0-.99.81-1.8 1.8-1.8h3.62c.99 0 1.8.81 1.8 1.8v3.6" />
      <path d="M12 15.6a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6ZM12 17.4v-1.8" />
    </g>
    <defs>
      <clipPath id="Lock-2_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLock2;
