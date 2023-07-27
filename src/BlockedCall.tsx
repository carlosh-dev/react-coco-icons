import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBlockedCall = ({
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
      strokeMiterlimit={10}
      strokeWidth={1.5}
      clipPath="url(#Blocked-call_svg__a)"
    >
      <path d="M18.81 20.44c-.38.34-.86.54-1.38.56-1.39 0-4.3-.85-8.95-5.48C3.84 10.9 3.04 7.94 3 6.6c0-.51.21-1 .55-1.37l1.64-1.64c.19-.2.42-.35.67-.45.27-.1.54-.13.82-.11.27.02.53.11.77.25s.44.33.59.56l1.34 1.89c.13.22.21.47.23.72.02.26-.03.51-.13.75l-.9 1.71a1.07 1.07 0 0 0 0 .86c.6 1.21 1.42 2.29 2.42 3.19.89 1.01 1.98 1.85 3.18 2.45a1.07 1.07 0 0 0 .86 0l1.72-.9c.24-.1.49-.15.75-.13.26.02.5.09.72.23l1.9 1.35c.23.15.43.35.57.59.14.24.23.5.25.77.03.27 0 .55-.11.81-.1.26-.26.49-.46.67l-1.57 1.64Z" />
      <path strokeLinecap="round" d="m21 3-6.02 6M21 9l-6.02-6" />
    </g>
    <defs>
      <clipPath id="Blocked-call_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBlockedCall;
