import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHorizontalSlide1 = ({
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
      clipPath="url(#Horizontal-Slide-1_svg__a)"
    >
      <path d="M5.77 18.37h12.46A2.77 2.77 0 0 0 21 15.6V8.54a2.77 2.77 0 0 0-2.77-2.77H5.77A2.77 2.77 0 0 0 3 8.54v7.06a2.77 2.77 0 0 0 2.77 2.77v0ZM19 21H5M19 3H5" />
    </g>
    <defs>
      <clipPath id="Horizontal-Slide-1_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHorizontalSlide1;
