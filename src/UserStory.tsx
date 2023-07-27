import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgUserStory = ({
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
      clipPath="url(#User-Story_svg__a)"
    >
      <path d="M12 12.32a2.19 2.19 0 1 0 .001-4.379A2.19 2.19 0 0 0 12 12.32ZM9.63 16.05c1.06-1.79 3.65-1.8 4.73-.02v.02" />
      <path d="M11.93 3C16.94 3 21 7.03 21 12s-4.06 9-9.07 9M8.83 20.45c-.99-.36-1.92-.88-2.73-1.56M6.1 5.11a9.26 9.26 0 0 1 2.73-1.56M3 10.44A8.91 8.91 0 0 1 4.08 7.5M3 13.56a8.91 8.91 0 0 0 1.08 2.94" />
    </g>
    <defs>
      <clipPath id="User-Story_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgUserStory;
