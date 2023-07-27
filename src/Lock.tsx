import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLock = ({
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
      clipPath="url(#Lock_svg__a)"
    >
      <path d="M7.76 9.75V7.24C7.76 4.9 9.66 3 12 3c2.34 0 4.24 1.9 4.24 4.24v2.51" />
      <path
        strokeLinecap="round"
        d="M12 15.6v1.8M12 15.59a1.12 1.12 0 1 0 0-2.24 1.12 1.12 0 0 0 0 2.24Z"
      />
      <path d="M16 9.3H8a4 4 0 0 0-4 4V17a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4v-3.7a4 4 0 0 0-4-4Z" />
    </g>
    <defs>
      <clipPath id="Lock_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLock;
