import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAddCamera = ({
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
      clipPath="url(#add-camera_svg__a)"
    >
      <path d="M17.4 20.5H6.6c-1.98 0-3.6-1.61-3.6-3.58V9.76c0-1.97 1.62-3.58 3.6-3.58h1.31c.31 0 .59-.16.76-.41l1.19-1.86c.17-.26.45-.41.76-.41h2.68c.3 0 .58.15.75.39l1.29 1.9c.17.25.45.39.75.39h1.32c1.98 0 3.6 1.61 3.6 3.58v7.16c0 1.97-1.62 3.58-3.6 3.58h-.01Z" />
      <path d="M12 17.86a4.73 4.73 0 1 0 0-9.46 4.73 4.73 0 0 0 0 9.46ZM12 14.93v-3.61M13.8 13.12l-3.6.01" />
    </g>
    <defs>
      <clipPath id="add-camera_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAddCamera;
