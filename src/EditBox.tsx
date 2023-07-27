import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgEditBox = ({
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      clipPath="url(#Edit-box_svg__a)"
    >
      <path d="M17 3H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4Z" />
      <path d="m14.42 12.64-3.41 3.41a.85.85 0 0 1-.53.25l-2.04.19a.86.86 0 0 1-.93-.94l.18-1.98c.02-.21.1-.39.25-.53l3.45-3.45 3.04 3.05h-.01Z" />
      <path d="m16.25 10.81-1.83 1.83-3.04-3.05 1.83-1.83c.34-.34.88-.34 1.21 0l1.83 1.83c.33.34.33.89 0 1.22Z" />
    </g>
    <defs>
      <clipPath id="Edit-box_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgEditBox;
