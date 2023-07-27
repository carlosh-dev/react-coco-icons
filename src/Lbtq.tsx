import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLbtq = ({
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
      clipPath="url(#LBTQ_svg__a)"
    >
      <path
        strokeMiterlimit={10}
        d="M10.49 15.01c2.48 0 4.49-2.02 4.49-4.5s-2-4.5-4.49-4.5S6 8.03 6 10.51s2 4.5 4.49 4.5ZM18 3l-4.32 4.34M10.49 15v6M12.49 19.01H8.51"
      />
      <path strokeLinejoin="round" d="M14.29 3H18v3.73" />
    </g>
    <defs>
      <clipPath id="LBTQ_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLbtq;
