import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFileVerified = ({
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
      clipPath="url(#File-verified_svg__a)"
    >
      <path d="m13.87 12.47.64.64 1.92-1.92" />
      <path d="M21 9.89c-.06.96-.33 3.21-1.39 4.75-.38.54-.84 1.05-1.31 1.51-.19.19-.39.37-.58.54-.88.77-1.75 1.33-2.21 1.62-.22.14-.49.14-.7 0-.82-.53-2.92-1.97-4.15-3.73-1.05-1.52-1.3-3.74-1.36-4.7-.02-.27.15-.52.41-.63 2.19-.92 4.15-2.56 4.99-3.33.26-.22.64-.22.88 0 .44.41 1.19 1.04 2.12 1.7.19.13.39.26.58.4.7.46 1.48.9 2.29 1.23.27.11.43.36.41.64H21Z" />
      <path d="M9.3 9.88c.05.95.31 3.18 1.36 4.7 1.22 1.76 3.33 3.2 4.15 3.73.22.14.49.14.7 0 .46-.29 1.32-.85 2.21-1.62.2-.17.4-.35.58-.54v1.24c0 1.98-1.62 3.6-3.6 3.6H6.6a3.61 3.61 0 0 1-3.6-3.6V6.59c0-1.98 1.62-3.6 3.6-3.6h8.1c1.98 0 3.6 1.62 3.6 3.6v1.42c-.2-.13-.4-.26-.58-.4-.94-.66-1.68-1.3-2.12-1.7a.669.669 0 0 0-.88 0c-.85.77-2.81 2.41-4.99 3.33-.26.11-.43.36-.41.63l-.02.01Z" />
    </g>
    <defs>
      <clipPath id="File-verified_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFileVerified;
