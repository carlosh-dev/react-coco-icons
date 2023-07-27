import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgConnected = ({
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
      strokeMiterlimit={10}
      strokeWidth={1.5}
      clipPath="url(#Connected_svg__a)"
    >
      <path d="m12.81 17.91-1.66 1.69c-.44.44-.97.8-1.55 1.04a4.813 4.813 0 0 1-3.65 0c-.58-.24-1.11-.59-1.55-1.04-.44-.44-.8-.97-1.04-1.55-.24-.58-.36-1.2-.36-1.83 0-.63.12-1.25.36-1.83.24-.58.6-1.11 1.04-1.55l1.68-1.69M11.15 6.09l1.69-1.69c.9-.89 2.11-1.4 3.38-1.4s2.48.5 3.38 1.4c.89.9 1.4 2.11 1.4 3.38s-.51 2.48-1.4 3.38l-1.69 1.69M8.58 15.38l6.76-6.75" />
    </g>
    <defs>
      <clipPath id="Connected_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgConnected;
