import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDart = ({
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
      clipPath="url(#Dart_svg__a)"
    >
      <path d="M11 16.97c2.21 0 4-1.8 4-4.01s-1.79-4.01-4-4.01-4 1.8-4 4.01 1.79 4.01 4 4.01Z" />
      <path d="M18.48 10.09c.66 1.72.71 3.61.14 5.36a7.963 7.963 0 0 1-3.25 4.25 7.94 7.94 0 0 1-5.19 1.25c-1.82-.19-3.52-1-4.82-2.3a8.138 8.138 0 0 1-2.31-4.83 8.035 8.035 0 0 1 5.47-8.48 7.96 7.96 0 0 1 5.34.13M17.97 5.98l-6.96 6.99M21 6h-3V3" />
    </g>
    <defs>
      <clipPath id="Dart_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDart;
