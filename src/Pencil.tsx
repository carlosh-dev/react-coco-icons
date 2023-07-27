import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPencil = ({
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
      clipPath="url(#Pencil_svg__a)"
    >
      <path d="m8.08 20.34-4.53.65c-.08.01-.15 0-.23-.01a.387.387 0 0 1-.19-.12.453.453 0 0 1-.11-.19.448.448 0 0 1 0-.23l.65-4.52c.07-.52.31-.99.68-1.36l10.5-10.5A3.658 3.658 0 0 1 17.4 3c.47 0 .94.09 1.38.28a3.582 3.582 0 0 1 1.95 1.95c.18.44.28.91.28 1.38 0 .47-.09.94-.28 1.38-.18.44-.45.84-.78 1.17L9.45 19.65c-.37.37-.85.61-1.36.69h-.01Z" />
      <path strokeLinecap="round" d="m11.54 17.57-5.11-5.1" />
    </g>
    <defs>
      <clipPath id="Pencil_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPencil;
