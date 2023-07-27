import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCup = ({
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
    <g stroke="#000" strokeWidth={1.5} clipPath="url(#Cup_svg__a)">
      <path
        strokeLinejoin="round"
        d="M18.01 19.45V21h-12v-1.55c0-.42.13-.83.38-1.17.25-.34.59-.59.99-.73 3.01-.99 6.25-.99 9.27 0 .4.13.74.39.99.73.25.34.39.75.39 1.17h-.02ZM15.01 13.25c-.92.53-1.95.81-3.01.81-1.06 0-2.09-.28-3.01-.81a4.991 4.991 0 0 1-1.82-1.83c-.44-.76-.66-1.62-.66-2.49V3h11v5.93c0 .87-.24 1.73-.67 2.49-.44.76-1.06 1.39-1.82 1.83h-.01Z"
      />
      <path strokeMiterlimit={10} d="M12 14.07v2.73" />
      <path
        strokeLinejoin="round"
        d="M6.51 5H3v3.58c0 .69.24 1.35.66 1.89.44.53 1.03.91 1.71 1.05l2.25.48M17.5 5H21v3.58c0 .68-.24 1.35-.66 1.88-.43.53-1.02.91-1.7 1.05l-2.25.48"
      />
    </g>
    <defs>
      <clipPath id="Cup_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCup;
