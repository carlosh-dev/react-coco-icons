import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTextBox = ({
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
      clipPath="url(#Text-box_svg__a)"
    >
      <path d="M17.55 3H6.18C4.35 3 2.86 4.48 2.86 6.32v11.37c0 1.83 1.49 3.32 3.32 3.32h11.37c1.83 0 3.32-1.48 3.32-3.32V6.32c0-1.83-1.49-3.32-3.32-3.32ZM11.87 17V8M7.86 8h8.01" />
    </g>
    <defs>
      <clipPath id="Text-box_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTextBox;
