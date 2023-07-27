import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDecreaseVolume = ({
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
    <g stroke="#000" strokeWidth={1.5} clipPath="url(#Decrease-volume_svg__a)">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.5 12.01H21" />
      <path
        strokeMiterlimit={10}
        d="M12.38 7.17v9.69c0 1.78-1.05 2.17-2.34.89a7.36 7.36 0 0 0-4.42-1.78c-.69 0-1.37-.27-1.86-.74s-.77-1.12-.77-1.79v-2.98c0-.67.28-1.31.77-1.79.49-.47 1.16-.74 1.86-.74a7.36 7.36 0 0 0 4.42-1.78c1.28-1.16 2.34-.77 2.34 1v.02Z"
      />
    </g>
    <defs>
      <clipPath id="Decrease-volume_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDecreaseVolume;
