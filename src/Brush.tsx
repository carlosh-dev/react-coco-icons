import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBrush = ({
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
      strokeMiterlimit={10}
      strokeWidth={1.5}
      clipPath="url(#Brush_svg__a)"
    >
      <path d="M11.07 14H9.91c-.79 0-1.42.64-1.42 1.42v4.16c0 .78.63 1.42 1.42 1.42h1.16c.79 0 1.42-.64 1.42-1.42v-4.16c0-.78-.63-1.42-1.42-1.42ZM15.5 5.5h1.25c.36 0 .72.07 1.05.21a2.796 2.796 0 0 1 1.49 1.49c.14.33.21.69.21 1.05 0 .73-.29 1.43-.81 1.94-.51.52-1.21.8-1.94.8h-3.5c-.36 0-.72.07-1.05.21a2.796 2.796 0 0 0-1.49 1.49c-.14.33-.21.69-.21 1.05v.25" />
      <path d="M13.6 3H6.39C5.35 3 4.5 3.85 4.5 4.89V6.1c0 1.05.85 1.89 1.89 1.89h7.21c1.04 0 1.89-.85 1.89-1.89V4.89c0-1.05-.85-1.89-1.89-1.89Z" />
    </g>
    <defs>
      <clipPath id="Brush_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrush;
