import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHourglass = ({
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
    <g clipPath="url(#hourglass_svg__a)">
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="m15.01 13.8 1.27.76c.21.15.39.34.51.56.12.22.2.47.22.73v3.66a1.499 1.499 0 0 1-1.5 1.5H8.53a1.498 1.498 0 0 1-1.5-1.5v-3.66a1.721 1.721 0 0 1 .73-1.29l8.51-5.13c.21-.14.39-.33.51-.55.13-.22.2-.47.22-.72V4.5A1.499 1.499 0 0 0 15.5 3H8.52a1.499 1.499 0 0 0-1.5 1.5v3.66c.02.25.09.5.22.72.12.22.3.41.51.55l1.27.77"
      />
    </g>
    <defs>
      <clipPath id="hourglass_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHourglass;
