import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgVideoFile2 = ({
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
      clipPath="url(#Video-file-2_svg__a)"
    >
      <path d="M16.68 6H7.31C5.48 6 3.99 7.49 3.99 9.32v8.37c0 1.83 1.49 3.32 3.32 3.32h9.37c1.83 0 3.32-1.49 3.32-3.32V9.32C20 7.49 18.51 6 16.68 6Z" />
      <path d="M10.01 12.08v2.84c0 1.37 1 1.83 2.25.95l2.13-1.42c.16-.11.3-.26.39-.43a1.232 1.232 0 0 0 0-1.14c-.09-.17-.23-.32-.39-.43l-2.13-1.43c-1.24-.77-2.25-.31-2.25 1.06v0ZM6 3h12" />
    </g>
    <defs>
      <clipPath id="Video-file-2_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgVideoFile2;
