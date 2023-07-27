import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgClock = ({
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
      clipPath="url(#Clock_svg__a)"
    >
      <path
        strokeLinejoin="round"
        d="M12 21.03c4.07 0 7.37-3.412 7.37-7.62S16.07 5.79 12 5.79s-7.37 3.412-7.37 7.62 3.3 7.62 7.37 7.62Z"
      />
      <path
        strokeMiterlimit={10}
        d="m4.87 5.05 2.8-2.03M19.63 5.05l-2.8-2.03"
      />
      <path strokeLinejoin="round" d="M12 10.33v3.28l2.26 1.95" />
    </g>
    <defs>
      <clipPath id="Clock_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgClock;
