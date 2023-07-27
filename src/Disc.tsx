import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDisc = ({
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
      strokeMiterlimit={10}
      strokeWidth={1.5}
      clipPath="url(#Disc_svg__a)"
    >
      <path d="M12 21a9 9 0 1 0-.001-18.001A9 9 0 0 0 12 21Z" />
      <path d="M12.19 14c1.11 0 2-.89 2-2 0-1.11-.89-2-2-2-1.11 0-2 .89-2 2 0 1.11.89 2 2 2Z" />
      <path
        strokeLinecap="round"
        d="M6.78 11c.2-1.06.7-2.04 1.46-2.82a5.51 5.51 0 0 1 2.77-1.55"
      />
    </g>
    <defs>
      <clipPath id="Disc_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDisc;
