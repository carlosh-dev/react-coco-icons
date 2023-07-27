import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgUserRestricted = ({
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
      clipPath="url(#User-restricted_svg__a)"
    >
      <path d="M14.43 9.93c0 1.22-.91 2.24-2.1 2.4L9.59 9.59c.16-1.19 1.18-2.1 2.4-2.1 1.34 0 2.43 1.09 2.43 2.43l.01.01ZM9.37 16.5c.59-.99 1.6-1.49 2.62-1.5" />
      <path d="M15.61 20.24c-1.11.49-2.33.76-3.61.76-4.95 0-9-4.05-9-9 0-1.32.29-2.57.8-3.71M5.86 5.44A8.955 8.955 0 0 1 12 3c4.95 0 9 4.05 9 9 0 2.31-.88 4.42-2.32 6.02M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="User-restricted_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgUserRestricted;
