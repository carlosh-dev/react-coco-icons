import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFrame1 = ({
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
      clipPath="url(#Frame-1_svg__a)"
    >
      <path d="M11.98 18.5c3.62 0 6.54-2.91 6.54-6.5s-2.92-6.5-6.54-6.5S5.44 8.41 5.44 12s2.92 6.5 6.54 6.5Z" />
      <path d="M5.59 13.37C3.7 15.1 2.65 16.62 3.1 17.36c.45.74 2.27.55 4.73-.36 1.93-.74 3.8-1.66 5.56-2.75 1.78-1.05 3.46-2.27 5-3.64 1.94-1.73 2.95-3.25 2.5-3.99-.45-.74-2.28-.55-4.73.37" />
    </g>
    <defs>
      <clipPath id="Frame-1_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFrame1;
