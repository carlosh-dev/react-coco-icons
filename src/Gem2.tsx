import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGem2 = ({
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
      strokeMiterlimit={10}
      strokeWidth={1.5}
      clipPath="url(#Gem-2_svg__a)"
    >
      <path d="m3.43 8.71 3.03-3.89c.19-.26.45-.46.74-.61.29-.14.6-.22.92-.22h7.76c.32 0 .64.07.92.22.3.14.54.35.75.61l3.03 3.89c.29.36.43.82.41 1.28-.03.46-.21.9-.53 1.24l-7.78 8.46c-.08.1-.19.18-.31.23a.91.91 0 0 1-.74 0 .788.788 0 0 1-.31-.23l-7.79-8.45A1.92 1.92 0 0 1 3 9.99c-.02-.47.13-.93.42-1.29l.01.01ZM3.1 10.02h17.81" />
      <path d="m13 4 1.98 6.02-2.97 9.96" />
    </g>
    <defs>
      <clipPath id="Gem-2_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGem2;
