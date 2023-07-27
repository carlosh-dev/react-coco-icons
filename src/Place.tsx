import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPlace = ({
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
      clipPath="url(#Place_svg__a)"
    >
      <path d="M12 10.4c2.038 0 3.69-1.706 3.69-3.81S14.038 2.78 12 2.78c-2.038 0-3.69 1.706-3.69 3.81S9.962 10.4 12 10.4ZM12 16.76V10.4M17 13.21c2.41.74 4 2 4 3.43 0 2.28-4.03 4.13-9 4.13s-9-1.85-9-4.13c0-1.43 1.59-2.7 4-3.43" />
    </g>
    <defs>
      <clipPath id="Place_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPlace;
