import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgRemoveUser = ({
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
      clipPath="url(#remove-user_svg__a)"
    >
      <path d="M8.85 13.8c2.98 0 5.4-2.42 5.4-5.4 0-2.98-2.42-5.4-5.4-5.4-2.98 0-5.4 2.42-5.4 5.4 0 2.98 2.42 5.4 5.4 5.4ZM3 21c2.63-4.42 9.01-4.44 11.67-.05l.03.05M15.6 14.7H21" />
    </g>
    <defs>
      <clipPath id="remove-user_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRemoveUser;
