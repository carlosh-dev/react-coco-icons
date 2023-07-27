import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFile = ({
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
      clipPath="url(#File_svg__a)"
    >
      <path d="M8.52 3H5.7a2.71 2.71 0 0 0-2.71 2.7v12.6c0 1.49 1.21 2.7 2.71 2.7h12.59A2.71 2.71 0 0 0 21 18.3v-9c0-1.49-1.21-2.7-2.71-2.7h-5.73a.91.91 0 0 1-.81-.5l-.81-1.61A2.72 2.72 0 0 0 8.52 3v0Z" />
      <path d="M18.31 6.6v-.92A1.81 1.81 0 0 0 16.5 3.9h-5.4M7.49 16.5h3.61" />
    </g>
    <defs>
      <clipPath id="File_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFile;
