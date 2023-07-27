import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPlaceClosed = ({
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
      clipPath="url(#Place-closed_svg__a)"
    >
      <path d="M19 10.2c0 2.5-1.1 4.73-2.44 6.49L12 12 6.26 6.1C7.51 4.23 9.62 3 12 3c3.87 0 7 3.22 7 7.2Z" />
      <path d="M14.7 10.2c0 1.22-.8 2.25-1.92 2.58L9.41 9.41a2.68 2.68 0 0 1 2.58-1.92c1.49 0 2.7 1.21 2.7 2.7l.01.01ZM21 21l-8.22-8.22M9.42 9.42 3 3M5.06 9.25c-.04.31-.06.63-.06.95C5 16.5 12 21 12 21s1.22-.78 2.64-2.16" />
    </g>
    <defs>
      <clipPath id="Place-closed_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPlaceClosed;
