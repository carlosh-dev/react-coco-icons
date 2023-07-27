import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCrown = ({
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
      clipPath="url(#Crown_svg__a)"
    >
      <path d="M16.24 21H7.72c-.8-.02-1.55-.32-2.15-.84-.6-.52-.99-1.24-1.13-2.03L3.02 6.83c-.1-.66.26-.88.8-.49l4.11 2.99 3.64-6.03c.04-.09.09-.16.17-.21a.53.53 0 0 1 .27-.08c.1 0 .18.03.26.08.09.05.14.13.18.21l3.64 6.03 4.1-2.99c.55-.39.95-.17.8.49l-1.42 11.3c-.13.79-.54 1.51-1.15 2.04-.61.52-1.37.82-2.17.83h-.01ZM9.96 15.77h4" />
    </g>
    <defs>
      <clipPath id="Crown_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCrown;
