import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgExclamationCircle = ({
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
      clipPath="url(#Exclamation-Circle_svg__a)"
    >
      <path
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 12a9 9 0 1 0-18 0 9 9 0 0 0 18 0ZM12 8.1v4.79"
      />
      <path strokeWidth={2} d="M12 16.5h.01" />
    </g>
    <defs>
      <clipPath id="Exclamation-Circle_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgExclamationCircle;
