import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgShop2 = ({
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
      clipPath="url(#Shop-2_svg__a)"
    >
      <path d="M17 7.5H7a4 4 0 0 0-4 4V17a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4v-5.5a4 4 0 0 0-4-4Z" />
      <path d="M8.4 9.3V6.6C8.4 4.61 10.01 3 12 3s3.6 1.61 3.6 3.6v2.7M14.57 16.5H9.43" />
    </g>
    <defs>
      <clipPath id="Shop-2_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgShop2;
