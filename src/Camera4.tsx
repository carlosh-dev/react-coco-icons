import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCamera4 = ({
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
    <g clipPath="url(#Camera-4_svg__a)">
      <path
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.59 6H6.4C4.52 6 2.99 7.52 2.99 9.41v8.19c0 1.88 1.52 3.41 3.41 3.41h11.19c1.88 0 3.41-1.52 3.41-3.41V9.41C21 7.53 19.48 6 17.59 6Z"
      />
      <path
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.5 16a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 0 0 5Z"
      />
      <path
        fill="#000"
        d="M17 10.97c.54 0 .97-.44.97-.97s-.44-.97-.97-.97-.97.44-.97.97.44.97.97.97Z"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 3h8"
      />
    </g>
    <defs>
      <clipPath id="Camera-4_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCamera4;
