import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgEditBox2 = ({
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      clipPath="url(#Edit-box2_svg__a)"
    >
      <path
        strokeLinecap="round"
        d="M21 12v5.4c0 1.98-1.62 3.6-3.6 3.6H6.6A3.61 3.61 0 0 1 3 17.4V6.6C3 4.62 4.62 3 6.6 3H12"
      />
      <path d="m18.5 9.17-4.1 4.1c-.18.18-.39.28-.64.3l-2.45.23c-.64.06-1.18-.49-1.12-1.13l.22-2.38c.02-.25.12-.47.3-.64l4.14-4.14 3.65 3.66ZM20.7 6.98l-2.2 2.19-3.65-3.66 2.19-2.19c.4-.4 1.06-.4 1.46 0l2.2 2.19c.39.4.39 1.07 0 1.47Z" />
    </g>
    <defs>
      <clipPath id="Edit-box2_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgEditBox2;
