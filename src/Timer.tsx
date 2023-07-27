import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTimer = ({
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
      clipPath="url(#Timer_svg__a)"
    >
      <path d="M9.98 3h3.99M6.34 7.38c3.11-3.12 8.16-3.12 11.28 0 3.11 3.12 3.11 8.17 0 11.28-3.11 3.12-8.16 3.12-11.28 0-3.11-3.12-3.11-8.17 0-11.28Z" />
      <path d="M11.98 8.4v4.12c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5M18.48 6.51l-.87.87M18.01 4.99 20 6.98" />
    </g>
    <defs>
      <clipPath id="Timer_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTimer;
