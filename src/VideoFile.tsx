import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgVideoFile = ({
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
      clipPath="url(#Video-File_svg__a)"
    >
      <path d="M15.93 6.51h1.57c.93 0 1.82.37 2.47 1.02.65.66 1.02 1.54 1.02 2.47v7.5c0 .93-.37 1.82-1.02 2.47-.65.66-1.54 1.02-2.47 1.02H6.49c-.93 0-1.82-.37-2.47-1.02A3.514 3.514 0 0 1 3 17.5V10c0-.93.37-1.82 1.02-2.47.65-.66 1.54-1.02 2.47-1.02h2.48" />
      <path d="M8.98 5v4.02c0 1.89 1.42 2.57 3.16 1.41l3.01-2.02c.24-.15.44-.36.57-.61a1.658 1.658 0 0 0 0-1.62 1.59 1.59 0 0 0-.57-.61l-3.01-2.01C10.41 2.42 8.98 3.06 8.98 5ZM3 16h18M10.03 16l-3.14 5M17.11 16l-3.13 5" />
    </g>
    <defs>
      <clipPath id="Video-File_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgVideoFile;
