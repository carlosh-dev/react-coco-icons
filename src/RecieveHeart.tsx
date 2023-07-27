import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgRecieveHeart = ({
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
      clipPath="url(#Recieve-heart_svg__a)"
    >
      <path d="M3 9a5.002 5.002 0 0 1 9-3c.91-1.22 2.37-2 4-2 2.76 0 5 2.23 5 5 0 6.26-6.39 10.12-9 11M3.05 13.51h9.07" />
      <path d="m9.31 10.32 2.99 2.97c.13.12.13.33 0 .45l-2.99 2.97" />
    </g>
    <defs>
      <clipPath id="Recieve-heart_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRecieveHeart;
