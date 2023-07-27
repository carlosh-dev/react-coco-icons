import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSpace = ({
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
      clipPath="url(#Space_svg__a)"
    >
      <path d="M18.35 13.32c0 4.24-3.44 7.68-7.68 7.68s-7.68-3.44-7.68-7.68 3.44-7.68 7.68-7.68" />
      <path d="M20.09 10.16h-5.35c-.5 0-.9-.4-.9-.9V3.91c0-.55.49-.98 1.03-.9 3.17.45 5.67 2.96 6.13 6.13a.907.907 0 0 1-.9 1.03l-.01-.01Z" />
    </g>
    <defs>
      <clipPath id="Space_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSpace;
