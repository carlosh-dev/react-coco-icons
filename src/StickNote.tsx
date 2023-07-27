import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgStickNote = ({
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
      clipPath="url(#Stick-note_svg__a)"
    >
      <path d="M12.39 21H7.01a4.014 4.014 0 0 1-4-4.01v-10c0-1.06.42-2.08 1.18-2.82A3.98 3.98 0 0 1 7.01 3h10c1.06 0 2.08.42 2.82 1.17.74.75 1.17 1.76 1.17 2.82v5.39c-.06 1.18-.53 2.3-1.32 3.18l-4.11 4.12c-.88.79-2 1.26-3.18 1.32Z" />
      <path d="M13.13 17.62V14.8c0-.45.18-.87.5-1.19.31-.31.75-.49 1.19-.49h2.77" />
    </g>
    <defs>
      <clipPath id="Stick-note_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgStickNote;
