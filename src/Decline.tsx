import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDecline = ({
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
    <g stroke="#000" strokeWidth={1.5} clipPath="url(#Decline_svg__a)">
      <path
        strokeMiterlimit={10}
        d="M11.04 12.99a10.11 10.11 0 0 0 3.2 2.42 1.07 1.07 0 0 0 .86 0l1.72-.89c.23-.11.48-.15.74-.14.26.02.5.1.72.23l1.9 1.34c.23.15.42.35.56.59.14.24.23.5.26.77.02.27-.02.55-.11.81-.1.26-.25.49-.45.68l-1.64 1.64c-.38.34-.87.54-1.39.55-1.38-.05-4.3-.85-8.94-5.49"
      />
      <path
        strokeLinecap="round"
        strokeMiterlimit={10}
        d="M6.71 13.63C3.63 10.09 3.04 7.78 3 6.6c.02-.51.21-1 .55-1.39l1.64-1.64a1.83 1.83 0 0 1 2.26-.31c.24.14.44.33.59.56l1.34 1.9c.13.22.22.46.24.72 0 .26-.04.51-.14.74L8.59 8.9c-.06.13-.09.28-.09.43 0 .15.04.29.09.43.2.43.44.84.7 1.23"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18.54 5.48 5.5 18.52"
      />
    </g>
    <defs>
      <clipPath id="Decline_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDecline;
