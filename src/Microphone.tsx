import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMicrophone = ({
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
      clipPath="url(#Microphone_svg__a)"
    >
      <path d="M12.14 3h-.28a4.27 4.27 0 0 0-4.27 4.27v4.96a4.27 4.27 0 0 0 4.27 4.27h.28a4.27 4.27 0 0 0 4.27-4.27V7.27A4.27 4.27 0 0 0 12.14 3Z" />
      <path d="M5.5 12.36c0 3.48 2.91 6.3 6.5 6.3s6.5-2.82 6.5-6.3M12 21v-1.8M16.18 10.2h-1.86M9.68 10.2H7.82" />
    </g>
    <defs>
      <clipPath id="Microphone_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMicrophone;
