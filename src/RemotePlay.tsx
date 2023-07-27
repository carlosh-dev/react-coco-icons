import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgRemotePlay = ({
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
      clipPath="url(#Remote-play_svg__a)"
    >
      <path d="M4.81 16.92A3.602 3.602 0 0 1 3 13.8V6.6C3 4.62 4.62 3 6.6 3h10.8C19.38 3 21 4.62 21 6.6v7.2c0 1.29-.69 2.43-1.72 3.07" />
      <path d="M11.12 14.25c.44-.59 1.32-.59 1.76 0l2.04 2.78 1.64 2.24c.53.72.01 1.74-.88 1.74H8.31c-.89 0-1.41-1.02-.88-1.74l1.64-2.24 2.04-2.78h.01Z" />
    </g>
    <defs>
      <clipPath id="Remote-play_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRemotePlay;
