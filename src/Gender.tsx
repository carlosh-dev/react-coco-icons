import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGender = ({
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
      clipPath="url(#Gender_svg__a)"
    >
      <path
        strokeMiterlimit={10}
        d="M16.95 19.28c2.23 0 4.05-1.85 4.05-4.14 0-2.29-1.82-4.14-4.05-4.14-2.23 0-4.05 1.85-4.05 4.14 0 2.29 1.82 4.14 4.05 4.14ZM14.09 18.08 11.23 21M11.16 18.99 13.14 21M6.91 13.24c2.16 0 3.91-1.79 3.91-4s-1.75-4-3.91-4S3 7.03 3 9.24s1.75 4 3.91 4ZM13.02 3 9.69 6.42"
      />
      <path strokeLinejoin="round" d="M10.51 3h2.5v2.56" />
    </g>
    <defs>
      <clipPath id="Gender_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGender;
