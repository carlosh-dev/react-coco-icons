import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgRadio = ({
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      clipPath="url(#Radio_svg__a)"
    >
      <path d="M17.64 6.51H6.1c-1.78 0-3.23 1.45-3.23 3.23v7.54c0 1.78 1.45 3.23 3.23 3.23h11.54c1.78 0 3.23-1.45 3.23-3.23V9.74c0-1.78-1.45-3.23-3.23-3.23Z" />
      <path d="M8.87 15.51a2 2 0 1 0 .001-3.999 2 2 0 0 0-.001 3.999ZM14.36 11.5h3M14.36 15.51h3M11.87 6.51l4-3" />
    </g>
    <defs>
      <clipPath id="Radio_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRadio;
