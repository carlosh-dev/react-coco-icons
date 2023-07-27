import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMovie = ({
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
      clipPath="url(#movie_svg__a)"
    >
      <path d="M17 3H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4ZM3.02 8.4H21M10.12 3.18 8 8.4M16 3.18 13.88 8.4" />
      <path d="M14.12 13.7c.77.44.77 1.55 0 1.99l-1.55.89-1.55.89c-.77.44-1.73-.11-1.73-1v-3.58c0-.89.96-1.44 1.73-1l1.55.89 1.55.89v.03Z" />
    </g>
    <defs>
      <clipPath id="movie_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMovie;
