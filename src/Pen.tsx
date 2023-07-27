import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPen = ({
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
      clipPath="url(#Pen_svg__a)"
    >
      <path d="m8.09 20.34-4.53.65c-.08.02-.15.01-.23 0a.466.466 0 0 1-.2-.12.448.448 0 0 1-.12-.2.362.362 0 0 1 0-.23l.65-4.53c.07-.52.31-.99.68-1.36l10.5-10.49A3.658 3.658 0 0 1 17.39 3c.47 0 .94.09 1.38.28.44.18.84.45 1.17.78.34.33.6.73.78 1.17.18.44.28.91.28 1.38 0 .47-.09.94-.28 1.38-.18.44-.45.84-.78 1.17L9.5 19.66c-.38.38-.88.61-1.41.68Z" />
      <path strokeLinecap="round" d="m17.03 6.98-1.52 1.51" />
    </g>
    <defs>
      <clipPath id="Pen_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPen;
