import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPin = ({
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
      clipPath="url(#Pin_svg__a)"
    >
      <path d="m20.72 8.77-3.42 3.59c-.23.24-.4.54-.48.86l-1.07 3.98c-.4 1.48-2.26 1.98-3.36.9l-6.56-6.53c-1.08-1.08-.6-2.92.87-3.33l4-1.12c.3-.09.58-.24.82-.45l3.68-3.38c.45-.41 1.15-.39 1.58.03l3.9 3.88c.44.43.45 1.13.03 1.58l.01-.01ZM3.02 20.98l6.14-6.11M11.18 6.98 14.1 9.9" />
    </g>
    <defs>
      <clipPath id="Pin_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPin;
