import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgUser = ({
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
      clipPath="url(#User_svg__a)"
    >
      <path d="M12 13.8c3.06 0 5.54-2.42 5.54-5.4C17.54 5.42 15.06 3 12 3S6.46 5.42 6.46 8.4c0 2.98 2.48 5.4 5.54 5.4ZM6 21c2.69-4.42 9.24-4.44 11.97-.05L18 21" />
    </g>
    <defs>
      <clipPath id="User_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgUser;
