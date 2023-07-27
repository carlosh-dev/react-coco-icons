import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSupportBox = ({
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
      clipPath="url(#Support-box_svg__a)"
    >
      <path d="M20.88 13.53c-.62 3.73-3.39 6.6-7.11 7.3a9.07 9.07 0 0 1-5.64-.7c-.27-.13-.72-.19-1.01-.12-.63.15-1.68.41-2.57.62-.85.21-1.38-.32-1.17-1.17L4 16.9c.08-.29 0-.75-.12-1.02-.76-1.59-1.06-3.44-.75-5.38.61-3.73 3.62-6.75 7.35-7.37 6.16-.99 11.41 4.25 10.4 10.41v-.01ZM14.7 12H9.3" />
    </g>
    <defs>
      <clipPath id="Support-box_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSupportBox;
