import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLayers = ({
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
      clipPath="url(#Layers_svg__a)"
    >
      <path d="M11.45 13.77 3.7 9.43c-.94-.54-.94-1.43 0-1.97l7.75-4.34c.17-.08.36-.12.55-.12.19 0 .38.04.55.12l7.75 4.34c.94.54.94 1.43 0 1.97l-7.75 4.34c-.17.08-.36.12-.55.12-.19 0-.38-.04-.55-.12Z" />
      <path d="m18.7 13.68 1.6.89c.94.54.94 1.43 0 1.97l-7.75 4.34c-.17.08-.36.12-.55.12-.19 0-.38-.04-.55-.12L3.7 16.54c-.94-.54-.94-1.43 0-1.97l1.59-.89" />
    </g>
    <defs>
      <clipPath id="Layers_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLayers;
