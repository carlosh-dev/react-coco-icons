import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSign = ({
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
      clipPath="url(#Sign_svg__a)"
    >
      <path strokeLinecap="round" d="M12 13.5v-3M12 21v-1.5M12 4.5V3" />
      <path d="M17 13.5H7.01a2 2 0 0 0-2 2v1.99a2 2 0 0 0 2 2H17a2 2 0 0 0 2-2V15.5a2 2 0 0 0-2-2ZM14.99 4.5H9a2 2 0 0 0-2 2v1.99a2 2 0 0 0 2 2h5.99a2 2 0 0 0 2-2V6.5a2 2 0 0 0-2-2Z" />
    </g>
    <defs>
      <clipPath id="Sign_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSign;
