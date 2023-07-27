import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTransfer = ({
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
      clipPath="url(#Transfer_svg__a)"
    >
      <path d="M7.33 19V5.42M3 9.31l4.02-4.18c.17-.18.44-.18.61 0l4.02 4.18M16.67 5v13.58M21 14.69l-4.02 4.18c-.17.18-.44.18-.61 0l-4.02-4.18" />
    </g>
    <defs>
      <clipPath id="Transfer_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTransfer;
