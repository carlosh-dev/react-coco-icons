import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCallTo = ({
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
    <g stroke="#000" strokeWidth={1.5} clipPath="url(#Call-to_svg__a)">
      <path
        strokeMiterlimit={10}
        d="M18.77 20.44c-.73.44-.87.54-1.38.56-1.37 0-4.29-.85-8.91-5.48C3.86 10.9 3.05 7.94 3 6.6c.02-.51.21-.99.55-1.37l1.64-1.64c.19-.2.42-.35.67-.45.27-.1.54-.13.81-.11.27.02.53.11.77.25s.44.33.59.56l1.34 1.89c.13.22.22.47.24.72 0 .26-.04.51-.14.75l-.89 1.71c-.06.13-.09.28-.09.43 0 .15.04.29.09.43.59 1.21 1.41 2.29 2.42 3.19a10.22 10.22 0 0 0 3.19 2.42c.13.06.27.09.43.09.16 0 .29-.03.43-.09l1.74-.85c.23-.11.48-.16.74-.14.26.01.5.09.72.23l1.89 1.35c.23.15.43.35.57.59.13.24.23.5.25.77.03.27 0 .55-.1.81s-.26.49-.45.68c0 0-.91 1.18-1.64 1.62Z"
      />
      <path strokeLinecap="round" strokeMiterlimit={10} d="m15 9 6-6" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 7V3h-4" />
    </g>
    <defs>
      <clipPath id="Call-to_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCallTo;
