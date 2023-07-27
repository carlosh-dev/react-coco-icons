import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgRemoveArchive = ({
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
      clipPath="url(#Remove-archive_svg__a)"
    >
      <path d="M6.77 10.71v-4.2c0-.93.36-1.82 1.02-2.47a3.39 3.39 0 0 1 2.43-1.03h6.34c.91 0 1.78.38 2.44 1.03.64.66 1.01 1.54 1.01 2.47v12.78c0 1.78-1.06 2.26-2.36 1.06l-2.99-2.75-.16-.13" />
      <path d="M9.42 21c2.99 0 5.42-2.46 5.42-5.5S12.41 10 9.42 10C6.43 10 4 12.46 4 15.5S6.43 21 9.42 21Z" />
      <path strokeLinecap="round" d="M11.39 15.5H7.45" />
    </g>
    <defs>
      <clipPath id="Remove-archive_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRemoveArchive;
