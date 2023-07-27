import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLoop = ({
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
      clipPath="url(#Loop_svg__a)"
    >
      <path d="M13.88 17.5H6.77a3.89 3.89 0 0 1-3.89-3.89V9.5c0-.8.32-1.56.88-2.12a3.05 3.05 0 0 1 2.12-.89" />
      <path d="m10.88 14.5 3 3-3 3M9.88 6.49h7.6c.9 0 1.76.37 2.4 1 .64.64 1 1.5 1 2.4v4.59c0 .8-.32 1.56-.88 2.12s-1.32.88-2.12.89" />
      <path d="m12.87 9.5-3-3 3-3.01" />
    </g>
    <defs>
      <clipPath id="Loop_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLoop;
