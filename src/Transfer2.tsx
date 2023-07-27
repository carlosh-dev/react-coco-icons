import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTransfer2 = ({
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
      clipPath="url(#Transfer-2_svg__a)"
    >
      <path d="M5 7.33h13.58M14.69 3l4.18 4.02c.18.17.18.44 0 .61l-4.18 4.02M19 16.67H5.42M9.31 21l-4.18-4.02a.412.412 0 0 1 0-.61l4.18-4.02" />
    </g>
    <defs>
      <clipPath id="Transfer-2_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTransfer2;
