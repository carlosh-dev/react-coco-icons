import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFrame = ({
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
      clipPath="url(#Frame_svg__a)"
    >
      <path d="M16.5 3h3.6c.5 0 .9.4.9.9v3.48M3 7.5V3.9c0-.5.4-.9.9-.9h3.48M7.47 21H3.9c-.5 0-.9-.4-.9-.9v-3.6M21 16.49v3.61c0 .5-.4.9-.9.9h-3.6" />
    </g>
    <defs>
      <clipPath id="Frame_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFrame;
