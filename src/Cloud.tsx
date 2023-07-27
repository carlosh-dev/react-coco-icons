import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCloud = ({
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
    <g clipPath="url(#Cloud_svg__a)">
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7.72 12.84c-.48-.23-1.01-.36-1.55-.36-4.22.29-4.22 6.2 0 6.49h10.01c1.22 0 2.39-.43 3.28-1.22 2.97-2.49 1.38-7.51-2.53-7.98-1.41-8.14-13.62-5.05-10.72 2.71"
      />
    </g>
    <defs>
      <clipPath id="Cloud_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCloud;
