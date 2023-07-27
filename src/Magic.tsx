import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMagic = ({
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
      strokeWidth={1.5}
      clipPath="url(#Magic_svg__a)"
    >
      <path
        strokeLinejoin="round"
        d="M12.98 5.67V3M18.33 11H21M18.65 16.66l-1.89-1.89M9.21 7.22 7.32 5.34M16.76 7.21l1.89-1.89"
      />
      <path
        strokeMiterlimit={10}
        d="M13.01 13.83c.78-.78.78-2.05 0-2.83-.79-.78-2.05-.78-2.84 0l-6.58 6.59c-.79.78-.79 2.05 0 2.83.78.78 2.05.78 2.83 0l6.59-6.59Z"
      />
    </g>
    <defs>
      <clipPath id="Magic_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMagic;
