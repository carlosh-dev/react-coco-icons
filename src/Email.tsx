import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgEmail = ({
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
      clipPath="url(#Email_svg__a)"
    >
      <path d="M16.99 3.5H7a4 4 0 0 0-4 4v9a4 4 0 0 0 4 4h9.99a4 4 0 0 0 4-4v-9a4 4 0 0 0-4-4Z" />
      <path d="M3 10.49c0 .63.33 1.21.87 1.53l6.74 4.02c.85.51 1.93.51 2.78 0l6.74-4.02c.54-.32.87-.9.87-1.53" />
    </g>
    <defs>
      <clipPath id="Email_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgEmail;
