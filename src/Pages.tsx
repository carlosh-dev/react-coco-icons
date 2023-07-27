import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPages = ({
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
    <g stroke="#000" strokeWidth={1.5} clipPath="url(#Pages_svg__a)">
      <path d="M14.25 5.7H7a3 3 0 0 0-3 3V18a3 3 0 0 0 3 3h7.25a3 3 0 0 0 3-3V8.7a3 3 0 0 0-3-3Z" />
      <path
        strokeLinecap="round"
        d="M11.06 3h6.29C18.81 3 20 4.21 20 5.7v8.57"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.58 17.4h3.54" />
    </g>
    <defs>
      <clipPath id="Pages_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPages;
