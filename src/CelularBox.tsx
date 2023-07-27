import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCelularBox = ({
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
      strokeWidth={1.5}
      clipPath="url(#Celular-box_svg__a)"
    >
      <path
        strokeLinejoin="round"
        d="m7.36 10 2.59-2.56v7.09M16.65 14l-2.6 2.56v-7.1"
      />
      <path
        strokeMiterlimit={10}
        d="M17.5 3h-11C4.57 3 3 4.57 3 6.5v11C3 19.43 4.57 21 6.5 21h11c1.93 0 3.5-1.57 3.5-3.5v-11C21 4.57 19.43 3 17.5 3Z"
      />
    </g>
    <defs>
      <clipPath id="Celular-box_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCelularBox;
