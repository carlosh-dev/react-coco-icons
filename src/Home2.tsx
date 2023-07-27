import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHome2 = ({
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
      clipPath="url(#Home-2_svg__a)"
    >
      <path d="m10.77 3.55-7.19 7.51c-.34.35-.53.83-.53 1.33v6.74c0 1.04.81 1.88 1.8 1.88h14.4c.99 0 1.8-.84 1.8-1.88v-6.74c0-.5-.19-.98-.53-1.33l-7.2-7.5c-.7-.73-1.84-.73-2.55 0v-.01Z" />
      <path d="M10.2 14.31c0-1 .81-1.81 1.81-1.81v0c1 0 1.81.81 1.81 1.81v.88c0 1-.81 1.81-1.81 1.81v0c-1 0-1.81-.81-1.81-1.81v-.88Z" />
    </g>
    <defs>
      <clipPath id="Home-2_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHome2;
