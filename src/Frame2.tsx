import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFrame2 = ({
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
      clipPath="url(#Frame-2_svg__a)"
    >
      <path d="M7.38 3v3.6c0 .5-.4.9-.9.9H3M21 7.38h-3.6c-.5 0-.9-.4-.9-.9V3M3 16.5h3.57c.5 0 .9.4.9.9V21M16.5 21v-3.61c0-.5.4-.9.9-.9H21" />
    </g>
    <defs>
      <clipPath id="Frame-2_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFrame2;
