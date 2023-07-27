import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgItems = ({
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
      clipPath="url(#items_svg__a)"
    >
      <path d="M17.4 10.2c1.99 0 3.6-1.61 3.6-3.6S19.39 3 17.4 3s-3.6 1.61-3.6 3.6 1.61 3.6 3.6 3.6ZM6.6 10.2c1.99 0 3.6-1.61 3.6-3.6S8.59 3 6.6 3 3 4.61 3 6.6s1.61 3.6 3.6 3.6ZM17.4 21c1.99 0 3.6-1.61 3.6-3.6s-1.61-3.6-3.6-3.6-3.6 1.61-3.6 3.6 1.61 3.6 3.6 3.6ZM6.6 21c1.99 0 3.6-1.61 3.6-3.6s-1.61-3.6-3.6-3.6S3 15.41 3 17.4 4.61 21 6.6 21Z" />
    </g>
    <defs>
      <clipPath id="items_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgItems;
