import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgConnectedChart = ({
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
      clipPath="url(#Connected-Chart_svg__a)"
    >
      <path d="M10.65 9.3c0 .38-.14.74-.37 1-.28.36-.71.58-1.21.58-.55 0-1.02-.27-1.3-.69-.18-.25-.27-.56-.27-.88 0-.87.7-1.57 1.58-1.57.88 0 1.57.7 1.57 1.57V9.3ZM16.5 14.7c0 .87-.7 1.57-1.58 1.57-.88 0-1.57-.7-1.57-1.57 0-.35.12-.67.32-.93.28-.39.73-.64 1.26-.64s1.02.27 1.3.69c.18.25.27.56.27.88v0ZM13.53 13.58l-3.12-3.16M21 8.98l-4.5 4.5M3 15.01l4.62-4.62" />
      <path d="M17 3H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4Z" />
    </g>
    <defs>
      <clipPath id="Connected-Chart_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgConnectedChart;
