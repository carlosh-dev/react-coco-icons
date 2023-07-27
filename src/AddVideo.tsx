import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAddVideo = ({
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
      clipPath="url(#add-Video_svg__a)"
    >
      <path d="M12.6 5.5H6a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h6.6a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3ZM21 14.49V9.51c0-.87-.92-1.4-1.64-.96l-3.76 2.33v2.23l3.76 2.33c.72.45 1.64-.09 1.64-.96v.01ZM9.3 14.7V9.3M12 12H6.6" />
    </g>
    <defs>
      <clipPath id="add-Video_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAddVideo;
