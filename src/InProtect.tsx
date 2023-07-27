import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgInProtect = ({
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
      clipPath="url(#in-protect_svg__a)"
    >
      <path d="m13.01 15.64-.69.29a.853.853 0 0 1-.63 0l-.69-.29c-.69-.29-1.3-.77-1.73-1.39-.43-.62-.7-1.34-.75-2.09l-.15-2.07c0-.17.03-.34.11-.48.09-.14.22-.26.37-.32l2.69-1.18c.3-.12.64-.12.95 0l2.63 1.17c.15.07.28.19.37.33.09.15.12.31.11.48l-.15 2.07a4.076 4.076 0 0 1-2.44 3.48v0Z" />
      <path d="M20.78 10c.14.66.22 1.33.22 2a8.999 8.999 0 0 1-9 9c-1.7 0-3.36-.48-4.79-1.39M3.23 14.01C3.08 13.35 3 12.68 3 12c0-2.39.95-4.67 2.64-6.36A8.984 8.984 0 0 1 12 3c1.68 0 3.32.47 4.74 1.36" />
      <path d="M18.37 7.63c1.11 0 2-.89 2-2 0-1.11-.89-2-2-2-1.11 0-2 .89-2 2 0 1.11.89 2 2 2ZM5.63 20.37c1.11 0 2-.89 2-2 0-1.11-.89-2-2-2-1.11 0-2 .89-2 2 0 1.11.89 2 2 2Z" />
    </g>
    <defs>
      <clipPath id="in-protect_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgInProtect;
