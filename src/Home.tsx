import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHome = ({
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
    <g clipPath="url(#Home_svg__a)">
      <path
        stroke="#000"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="m13.24 3.59 7.2 6.91c.36.34.56.82.56 1.32v7.44c0 1.01-.81 1.82-1.8 1.82H4.8c-.99 0-1.8-.82-1.8-1.82v-7.44c0-.5.2-.98.56-1.32l7.2-6.91c.69-.67 1.78-.67 2.48 0Z"
      />
    </g>
    <defs>
      <clipPath id="Home_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHome;
