import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLove = ({
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
      clipPath="url(#Love_svg__a)"
    >
      <path d="M11.93 3C16.94 3 21 7.03 21 12s-4.06 9-9.07 9M8.83 20.45c-.99-.36-1.92-.88-2.73-1.56M6.1 5.11a9.26 9.26 0 0 1 2.73-1.56M3 10.44A8.91 8.91 0 0 1 4.08 7.5M3 13.56a8.91 8.91 0 0 0 1.08 2.94" />
      <path d="M12 15.99c-1.19-.41-4.11-2.18-4.11-5.06 0-1.27 1.02-2.3 2.29-2.3.75 0 1.41.36 1.83.92.42-.56 1.08-.92 1.83-.92 1.26 0 2.29 1.03 2.29 2.3 0 2.88-2.92 4.66-4.11 5.06H12Z" />
    </g>
    <defs>
      <clipPath id="Love_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLove;
