import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSlide = ({
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
      clipPath="url(#Slide_svg__a)"
    >
      <path d="M16.97 18.23V5.77c0-1.53-1.23-2.77-2.76-2.77H9.77C8.24 3 7.01 4.24 7.01 5.77v12.46c0 1.53 1.23 2.77 2.76 2.77h4.44c1.52 0 2.76-1.24 2.76-2.77ZM21 8.77v6.46c0 .73-.29 1.44-.81 1.96-.51.52-1.21.81-1.95.81h-1.22V6h1.22c.74 0 1.43.29 1.95.81S21 8.03 21 8.77ZM3 15.69V8.77c0-.73.29-1.44.81-1.96S5.02 6 5.76 6h1.22v12H5.3A2.308 2.308 0 0 1 3 15.69v0Z" />
    </g>
    <defs>
      <clipPath id="Slide_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSlide;
