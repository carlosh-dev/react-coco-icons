import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgScreenShare = ({
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
      clipPath="url(#Screen-share_svg__a)"
    >
      <path d="M14.15 3H6.99a4 4 0 0 0-4 4v7.15a4 4 0 0 0 4 4h7.16a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4Z" />
      <path d="M13.41 21h1.27a6.3 6.3 0 0 0 6.3-6.3v-1.29" />
    </g>
    <defs>
      <clipPath id="Screen-share_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgScreenShare;
