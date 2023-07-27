import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPlace1 = ({
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
      clipPath="url(#Place-1_svg__a)"
    >
      <path d="M17.56 8.68c0 3.99-4.13 8.31-5.68 8.31-1.55 0-5.68-4.32-5.68-8.31 0-1.51.6-2.95 1.67-4.02a5.677 5.677 0 0 1 9.7 4.02h-.01Z" />
      <path d="M11.88 10.84c1.19 0 2.16-.97 2.16-2.16 0-1.19-.97-2.16-2.16-2.16-1.19 0-2.16.97-2.16 2.16 0 1.19.97 2.16 2.16 2.16ZM15.88 13.53c2.39.69 4 1.99 4 3.47 0 2.21-3.58 4-8 4s-8-1.79-8-4c0-1.48 1.61-2.77 4-3.47" />
    </g>
    <defs>
      <clipPath id="Place-1_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPlace1;
