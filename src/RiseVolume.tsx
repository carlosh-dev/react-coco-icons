import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgRiseVolume = ({
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
    <g stroke="#000" strokeWidth={1.5} clipPath="url(#Rise-volume_svg__a)">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.5 12.01H21M18.25 9.35v5.31"
      />
      <path
        strokeMiterlimit={10}
        d="M12.37 7.15v9.71c0 1.76-1.04 2.18-2.33.91a7.306 7.306 0 0 0-4.43-1.76c-.69 0-1.36-.27-1.85-.74s-.77-1.11-.77-1.78V10.5c0-.67.27-1.31.77-1.79.49-.47 1.16-.74 1.85-.75 1.64-.08 3.2-.7 4.43-1.76 1.29-1.22 2.33-.8 2.33.95Z"
      />
    </g>
    <defs>
      <clipPath id="Rise-volume_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRiseVolume;
