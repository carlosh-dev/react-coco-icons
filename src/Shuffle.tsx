import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgShuffle = ({
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
      clipPath="url(#Shuffle_svg__a)"
    >
      <path
        strokeMiterlimit={10}
        d="m10.36 14.84.68 1.15a3.37 3.37 0 0 0 2.89 1.64h7.06M3 6.37h.36a3.37 3.37 0 0 1 2.89 1.64l.67 1.12M3 17.63h.36a3.37 3.37 0 0 0 2.89-1.64l4.73-7.98a3.37 3.37 0 0 1 2.89-1.64h7.06"
      />
      <path
        strokeLinejoin="round"
        d="m17.61 14.25 3.37 3.37-3.37 3.37M17.61 3l3.37 3.38-3.37 3.37"
      />
    </g>
    <defs>
      <clipPath id="Shuffle_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgShuffle;
