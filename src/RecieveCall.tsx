import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgRecieveCall = ({
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
    <g stroke="#000" strokeWidth={1.5} clipPath="url(#recieve-call_svg__a)">
      <path
        strokeMiterlimit={10}
        d="M18.76 20.44c-.38.35-.86.54-1.37.56-1.38-.05-4.29-.84-8.91-5.48-4.63-4.63-5.42-7.58-5.47-8.91.02-.51.22-1 .56-1.38l1.64-1.64c.19-.2.42-.35.67-.45.27-.1.54-.13.81-.11.27.02.53.11.77.25s.44.33.59.56l1.34 1.89a1.57 1.57 0 0 1 .1 1.46l-.82 1.74a1.07 1.07 0 0 0 0 .86c.59 1.21 1.41 2.3 2.41 3.19.9 1 1.98 1.82 3.19 2.42.13.06.27.09.43.09.16 0 .29-.03.43-.09l1.71-.89c.24-.11.49-.15.75-.14.26.02.5.1.72.23l1.89 1.34c.23.15.43.35.57.59.13.24.23.5.25.77.03.27 0 .55-.1.81s-.26.49-.45.68l-1.68 1.66-.03-.01Z"
      />
      <path strokeLinecap="round" strokeMiterlimit={10} d="m20.99 3-6 6.01" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.99 5v4.01h4" />
    </g>
    <defs>
      <clipPath id="recieve-call_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRecieveCall;
