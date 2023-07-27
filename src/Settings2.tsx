import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSettings2 = ({
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
      clipPath="url(#Settings-2_svg__a)"
    >
      <path d="M3 6.81h11.45M17.73 10.12c1.806 0 3.27-1.482 3.27-3.31S19.536 3.5 17.73 3.5s-3.27 1.482-3.27 3.31 1.464 3.31 3.27 3.31ZM21 17.19H9.55M6.27 20.5c1.806 0 3.27-1.482 3.27-3.31s-1.464-3.31-3.27-3.31S3 15.362 3 17.19s1.464 3.31 3.27 3.31Z" />
    </g>
    <defs>
      <clipPath id="Settings-2_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSettings2;
