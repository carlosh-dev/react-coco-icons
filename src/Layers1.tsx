import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLayers1 = ({
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
      clipPath="url(#Layers-1_svg__a)"
    >
      <path d="M11.51 12.51 4.3 8.8c-1.05-.54-1.05-1.43 0-1.99l7.21-3.71c.31-.13.66-.13.97 0l7.21 3.71c1.05.54 1.05 1.43 0 1.99l-7.21 3.71c-.31.13-.66.13-.97 0ZM20.5 12.9l-8.02 4.12c-.16.08-.32.12-.49.12-.17 0-.33-.04-.49-.12L3.49 12.9" />
      <path d="m20.5 16.77-8.02 4.12c-.16.07-.32.11-.49.11-.17 0-.33-.04-.49-.11l-8.01-4.12" />
    </g>
    <defs>
      <clipPath id="Layers-1_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLayers1;
