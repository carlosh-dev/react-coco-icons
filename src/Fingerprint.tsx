import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFingerprint = ({
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
      strokeWidth={1.5}
      clipPath="url(#Fingerprint_svg__a)"
    >
      <path d="M12.01 14.96c-.91 0-1.65-.76-1.65-1.7v-2.54c0-.94.74-1.7 1.65-1.7.91 0 1.65.76 1.65 1.7v2.54c0 .94-.74 1.7-1.65 1.7Z" />
      <path d="M16.99 13.51c-.2 2.65-2.36 4.73-4.98 4.73-2.76 0-5-2.3-5-5.14v-2.2c0-2.84 2.24-5.14 5-5.14 2.59 0 4.72 2.03 4.97 4.62" />
      <path d="M5.32 7.22C6.56 4.72 9.1 3 12 3c4.12 0 7.5 3.47 7.5 7.71v2.57c0 4.24-3.37 7.71-7.5 7.71-4.12 0-7.5-3.47-7.5-7.71v-2.57" />
    </g>
    <defs>
      <clipPath id="Fingerprint_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFingerprint;
