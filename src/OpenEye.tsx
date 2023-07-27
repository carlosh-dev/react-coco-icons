import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgOpenEye = ({
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
      clipPath="url(#Open-Eye_svg__a)"
    >
      <path d="M3.38 15.37v-.02h-.01c4.37-7.41 12.65-7.51 17.11-.2M12 6.35V2.99M5.25 8.6 3 5.23M18.75 8.6 21 5.23" />
      <path d="M12 20.99a3.375 3.375 0 0 0 3.38-3.37A3.375 3.375 0 0 0 12 14.25a3.375 3.375 0 0 0-3.38 3.37A3.375 3.375 0 0 0 12 20.99Z" />
    </g>
    <defs>
      <clipPath id="Open-Eye_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgOpenEye;
