import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBattery = ({
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
      clipPath="url(#Battery_svg__a)"
    >
      <path d="M15.3 6H6a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h9.3a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3ZM21 10.65v2.7M6.6 10.2v3.6" />
    </g>
    <defs>
      <clipPath id="Battery_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBattery;
