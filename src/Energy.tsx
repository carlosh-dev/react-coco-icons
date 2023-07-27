import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgEnergy = ({
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
    <g clipPath="url(#Energy_svg__a)">
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="m15.86 4.4-2.74 5.07a.948.948 0 0 0 .51 1.34l3.75 1.31c.61.22.82 1.01.39 1.51l-6.24 7.2c-.34.4-.96.09-.9-.41l.69-4.95a.93.93 0 0 0-.6-1.01l-4.11-1.51c-.52-.18-.76-.8-.51-1.31l4.02-8.11c.15-.31.46-.52.81-.52h4.1a.96.96 0 0 1 .82 1.41l.01-.02Z"
      />
    </g>
    <defs>
      <clipPath id="Energy_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgEnergy;
