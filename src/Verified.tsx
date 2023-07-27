import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgVerified = ({
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
      clipPath="url(#Verified_svg__a)"
    >
      <path d="M14.84 5.04h3.67v3.91l2.5 3.05-2.5 3.05v3.91h-3.67L12 21l-2.88-2.04H5.43v-3.91l-2.42-3.04 2.42-3.04V5.05h3.69l2.89-2.03 2.84 2.04-.01-.02Z" />
      <path d="m9.3 12 1.8 1.8 3.6-3.6" />
    </g>
    <defs>
      <clipPath id="Verified_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgVerified;
