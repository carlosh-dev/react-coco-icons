import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgUnlimited = ({
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
    <g clipPath="url(#Unlimited_svg__a)">
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10.37 9.64C9.5 9.09 8.45 8 7.1 8c-2.26 0-4.09 1.79-4.09 4s1.84 4 4.09 4c1.52 0 2.93-.78 3.72-2.06l1.2-1.94 1.19-1.94A4.364 4.364 0 0 1 16.93 8c2.26 0 4.09 1.79 4.09 4s-1.84 4-4.09 4c-1.35 0-2.09-.94-3.27-1.64"
      />
    </g>
    <defs>
      <clipPath id="Unlimited_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgUnlimited;
