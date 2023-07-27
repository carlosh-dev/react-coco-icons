import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgUsers = ({
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
      clipPath="url(#Users_svg__a)"
    >
      <path d="M14.68 8.4c0 1.06-.3 2.05-.85 2.89-.04.08-.09.15-.14.22a5.334 5.334 0 0 1-4.37 2.29c-2.96 0-5.37-2.42-5.37-5.4C3.95 5.42 6.36 3 9.32 3c1.81 0 3.42.91 4.37 2.29.05.07.1.14.14.23.55.84.85 1.83.85 2.89V8.4Z" />
      <path d="M20.5 8.4c0 2.2-1.77 3.98-3.95 3.98-1.05 0-2-.41-2.71-1.09.55-.84.85-1.83.85-2.89s-.3-2.05-.85-2.89c.71-.68 1.66-1.09 2.71-1.09 2.18 0 3.95 1.78 3.95 3.98ZM3.5 21c2.61-4.42 8.96-4.44 11.6-.05l.03.05M19.16 20.1c-.42-1.46-1.42-2.6-2.68-3.09l1.19-1.19" />
    </g>
    <defs>
      <clipPath id="Users_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgUsers;
