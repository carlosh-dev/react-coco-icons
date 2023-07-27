import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMusic2 = ({
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
      clipPath="url(#Music-2_svg__a)"
    >
      <path d="M8.92 20.87c1.72 0 3.11-1.38 3.11-3.08 0-1.7-1.39-3.08-3.11-3.08s-3.11 1.38-3.11 3.08c0 1.7 1.39 3.08 3.11 3.08ZM13.45 2.99l4.85 2.57c.32.17.51.49.51.85v2.77c0 .71-.75 1.17-1.39.86l-4.85-2.32a.973.973 0 0 1-.55-.86V3.84c0-.72.78-1.19 1.43-.85ZM12.02 6v12.14" />
    </g>
    <defs>
      <clipPath id="Music-2_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMusic2;
