import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgWarning = ({
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
    <g clipPath="url(#Warning_svg__a)">
      <path
        stroke="#000"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M20.5 14.91v-5.8c0-.56-.15-1.12-.43-1.6-.29-.49-.7-.89-1.19-1.16l-5.31-2.93c-.47-.27-1.01-.41-1.56-.41s-1.09.14-1.56.41L5.14 6.35c-.49.27-.9.67-1.2 1.16-.29.48-.43 1.04-.43 1.6v5.8c0 .56.15 1.11.43 1.6.3.48.71.88 1.2 1.16l5.31 2.93c.47.27 1.01.41 1.56.41s1.09-.14 1.56-.41l5.31-2.93c.49-.27.9-.67 1.19-1.15.29-.48.43-1.03.43-1.59v-.02Z"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 7.29v5.29"
      />
      <path
        fill="#000"
        d="M12 16.73c.54 0 .98-.44.98-.98s-.44-.98-.98-.98-.98.44-.98.98.44.98.98.98Z"
      />
    </g>
    <defs>
      <clipPath id="Warning_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgWarning;
