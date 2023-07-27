import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgUserVerified = ({
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
      clipPath="url(#User-Verified_svg__a)"
    >
      <path d="M9.22 13.72c3.04 0 5.51-2.42 5.51-5.4 0-2.98-2.47-5.4-5.51-5.4-3.04 0-5.51 2.42-5.51 5.4 0 2.98 2.47 5.4 5.51 5.4ZM3.25 20.92c2.68-4.42 9.2-4.44 11.92-.05l.03.05M15.68 15.39l1.16 1.14 3.41-3.33" />
    </g>
    <defs>
      <clipPath id="User-Verified_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgUserVerified;
