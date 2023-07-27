import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCandele = ({
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
      clipPath="url(#Candele_svg__a)"
    >
      <path d="M18.5 5h-2.01c-.82 0-1.5.67-1.5 1.5v7.01c0 .83.67 1.5 1.5 1.5h2.01c.82 0 1.5-.67 1.5-1.5V6.5c0-.83-.67-1.5-1.5-1.5ZM7.5 9H5.49c-.82 0-1.5.67-1.5 1.5v7.01c0 .83.67 1.5 1.5 1.5H7.5c.82 0 1.5-.67 1.5-1.5V10.5C9 9.67 8.33 9 7.5 9ZM6.5 21v-2M6.5 9V3M17.5 21v-6M17.5 5V3" />
    </g>
    <defs>
      <clipPath id="Candele_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCandele;
