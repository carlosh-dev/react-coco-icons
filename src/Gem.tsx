import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGem = ({
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
      strokeMiterlimit={10}
      strokeWidth={1.5}
      clipPath="url(#Gem_svg__a)"
    >
      <path d="m3.28 8.72 3.03-3.89c.2-.25.46-.46.74-.6.29-.14.6-.21.92-.22h7.78c.32 0 .64.07.92.22.29.14.54.35.74.6l3.03 3.89c.28.37.42.82.4 1.28-.02.46-.2.91-.51 1.24l-7.81 8.46a.946.946 0 0 1-.68.3.946.946 0 0 1-.68-.3l-7.8-8.46c-.31-.34-.49-.78-.51-1.24-.02-.46.12-.92.4-1.28h.03Z" />
      <path strokeLinecap="round" d="m15.87 10.8-2 2" />
    </g>
    <defs>
      <clipPath id="Gem_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGem;
