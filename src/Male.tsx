import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMale = ({
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
      strokeWidth={1.5}
      clipPath="url(#Male_svg__a)"
    >
      <path
        strokeMiterlimit={10}
        d="M10.03 21c3.88 0 7.03-3.15 7.03-7.03 0-3.88-3.15-7.03-7.03-7.03C6.15 6.94 3 10.09 3 13.97 3 17.85 6.15 21 10.03 21ZM21 3l-5.99 6"
      />
      <path strokeLinejoin="round" d="M16.5 3H21v4.5" />
    </g>
    <defs>
      <clipPath id="Male_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMale;
