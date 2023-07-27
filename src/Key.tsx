import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgKey = ({
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
      clipPath="url(#Key_svg__a)"
    >
      <path d="m3 17.77 5.77-5.78c.25-.25.31-.61.21-.94-.39-1.23-.42-2.66.1-4.08.75-2.03 2.6-3.54 4.74-3.89a6.158 6.158 0 0 1 7.1 7.07c-.41 2.6-2.53 4.7-5.13 5.09-.89.14-1.74.08-2.53-.13a.93.93 0 0 0-.9.22L6.69 21H3v-3.23 0ZM11.2 16.18l-1.24-1.25M8.36 19.02l-1.25-1.25" />
      <path d="M14.84 10.58a1.42 1.42 0 1 0 0-2.84 1.42 1.42 0 0 0 0 2.84Z" />
    </g>
    <defs>
      <clipPath id="Key_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgKey;
