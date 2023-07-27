import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSlider2 = ({
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
      clipPath="url(#Slider-2_svg__a)"
    >
      <path d="M18.36 18.23V5.77A2.77 2.77 0 0 0 15.59 3H8.53a2.77 2.77 0 0 0-2.77 2.77v12.46A2.77 2.77 0 0 0 8.53 21h7.06a2.77 2.77 0 0 0 2.77-2.77ZM21 5v14M3 5v14" />
    </g>
    <defs>
      <clipPath id="Slider-2_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSlider2;
