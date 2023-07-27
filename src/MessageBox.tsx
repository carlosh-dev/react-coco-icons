import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMessageBox = ({
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
      clipPath="url(#Message-box_svg__a)"
    >
      <path d="M10.65 10.65h-1.8M15.15 10.65h-1.8M3 13.81V6.6C3 4.62 4.62 3 6.6 3h10.8C19.38 3 21 4.62 21 6.6v7.21c0 1.98-1.62 3.6-3.6 3.6h-1.45a.9.9 0 0 0-.64.26l-3.32 3.32-3.32-3.32a.9.9 0 0 0-.64-.26H6.58a3.61 3.61 0 0 1-3.6-3.6H3Z" />
    </g>
    <defs>
      <clipPath id="Message-box_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMessageBox;
