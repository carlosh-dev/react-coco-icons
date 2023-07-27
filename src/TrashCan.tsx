import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTrashCan = ({
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
      clipPath="url(#Trash_can_svg__a)"
    >
      <path d="m5.09 9.35 1.84 10.09c.16.9.95 1.56 1.87 1.56h6.39c.92 0 1.71-.65 1.87-1.56L18.9 9.35M3.03 6.18h18M7.22 6.18 8.69 3.5c.17-.3.49-.49.83-.49h4.96c.35 0 .67.19.83.49l1.47 2.68M14.01 13H9.99" />
    </g>
    <defs>
      <clipPath id="Trash_can_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTrashCan;
