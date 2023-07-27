import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSdCard = ({
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
      strokeMiterlimit={10}
      strokeWidth={1.5}
      clipPath="url(#SD-card_svg__a)"
    >
      <path d="M20 7.83v9.67a3.499 3.499 0 0 1-3.49 3.5h-9c-.92 0-1.82-.37-2.47-1.03a3.499 3.499 0 0 1-1.03-2.47v-11c0-.93.38-1.81 1.03-2.47C5.7 3.38 6.59 3.01 7.51 3h7.67c.53.03 1.02.23 1.41.58l2.83 2.83c.35.39.55.89.58 1.41v.01Z" />
      <path d="M10.94 14h2.11c.52 0 1.01.21 1.37.57.37.36.57.86.57 1.38V21h-6v-5.05c0-.52.2-1.01.57-1.38.36-.36.86-.57 1.37-.57h.01ZM9.57 10h4.86" />
    </g>
    <defs>
      <clipPath id="SD-card_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSdCard;
