import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgEye = ({
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
      clipPath="url(#Eye_svg__a)"
    >
      <path d="M15.18 12c0 1.76-1.42 3.18-3.18 3.18-1.76 0-3.18-1.42-3.18-3.18 0-1.76 1.42-3.18 3.18-3.18 1.76 0 3.18 1.42 3.18 3.18Z" />
      <path d="M12 19.5c3.45 0 6.63-2.28 8.67-6.16.44-.83.44-1.85 0-2.68C18.63 6.78 15.45 4.5 12 4.5s-6.63 2.28-8.67 6.16c-.44.83-.44 1.85 0 2.68C5.37 17.22 8.55 19.5 12 19.5Z" />
    </g>
    <defs>
      <clipPath id="Eye_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgEye;
