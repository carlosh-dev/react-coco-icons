import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBook = ({
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
      clipPath="url(#Book_svg__a)"
    >
      <path d="M12 6.29 4.27 3.07C3.66 2.82 3 3.28 3 3.95v13.61c0 .42.27.79.66.91L12 20.99V6.28v.01ZM12 6.25l7.73-3.18c.61-.25 1.27.21 1.27.88v13.64c0 .42-.27.79-.67.91L12 21V6.25v0Z" />
      <path d="M16.96 9.24h-.77a1 1 0 0 0-1 1v.77a1 1 0 0 0 1 1h.77a1 1 0 0 0 1-1v-.77a1 1 0 0 0-1-1ZM15.19 15.25h2.77M9 12.48H6.23M9 9.71H6.23" />
    </g>
    <defs>
      <clipPath id="Book_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBook;
