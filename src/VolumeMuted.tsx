import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgVolumeMuted = ({
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
    <g stroke="#000" strokeWidth={1.5} clipPath="url(#Volume-muted_svg__a)">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.59 14.12 21 9.88M16.59 9.89 21 14.13"
      />
      <path
        strokeMiterlimit={10}
        d="M12.42 7.17v9.69c0 1.77-1.06 2.17-2.35.89a7.402 7.402 0 0 0-4.43-1.77c-.7 0-1.37-.27-1.87-.74-.49-.47-.77-1.12-.77-1.79v-2.98c0-.33.06-.66.19-.97.14-.31.33-.59.57-.82.25-.23.54-.42.86-.55.31-.13.66-.19 1.01-.19 1.64-.09 3.21-.71 4.43-1.77 1.29-1.19 2.35-.78 2.35.99l.01.01Z"
      />
    </g>
    <defs>
      <clipPath id="Volume-muted_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgVolumeMuted;
