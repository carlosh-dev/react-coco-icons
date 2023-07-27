import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const Svg30Sec = ({
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      clipPath="url(#30Sec_svg__a)"
    >
      <path d="M5.63 18.36a8.977 8.977 0 0 0 10.86 1.44 9 9 0 0 0 4.2-10.12A8.989 8.989 0 0 0 12 3.01M3.78 15.43s-.02.05-.05.05c-.03 0-.05-.02-.05-.05 0-.03.02-.05.05-.05.01 0 .03 0 .04.01 0 0 .01.02.01.04M3.1 12s-.02.05-.05.05c-.03 0-.05-.02-.05-.05 0-.03.02-.05.05-.05.01 0 .03 0 .04.01 0 0 .01.02.01.04M3.78 8.58s-.02.05-.05.05c-.03 0-.05-.02-.05-.05 0-.03.02-.05.05-.05.01 0 .03 0 .04.01 0 0 .01.02.01.04M5.72 5.67s-.02.05-.05.05c-.03 0-.05-.02-.05-.05 0-.03.02-.05.05-.05.01 0 .03 0 .04.01 0 0 .01.02.01.04M8.62 3.73s-.02.05-.05.05c-.03 0-.05-.02-.05-.05 0-.03.02-.05.05-.05.01 0 .03 0 .04.01 0 0 .01.02.01.04" />
      <path d="M8.32 10.61c.14-.51.6-.86 1.12-.86.66 0 1.19.53 1.19 1.19 0 .59-.48 1.06-1.06 1.06.59 0 1.06.48 1.06 1.06 0 .66-.53 1.19-1.19 1.19-.53 0-.99-.36-1.12-.86M15.68 11.1a1.35 1.35 0 1 0-2.7 0v1.8a1.35 1.35 0 1 0 2.7 0v-1.8Z" />
    </g>
    <defs>
      <clipPath id="30Sec_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default Svg30Sec;
