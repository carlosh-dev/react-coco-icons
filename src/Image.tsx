import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgImage = ({
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
      strokeMiterlimit={10}
      strokeWidth={1.5}
      clipPath="url(#Image_svg__a)"
    >
      <path d="M19.11 20.6c-1.97-.89-3.8-2.07-5.43-3.5l-.26-.2c-2.05-1.64-3.84-3.05-5.68-2.92A8.959 8.959 0 0 0 3 16.35" />
      <path d="M13.67 17.1c.98-1.1 2.3-1.85 3.75-2.13 1.14-.08 2.26.76 3.53 1.77M14.97 10.55a2 2 0 1 0 .001-3.999 2 2 0 0 0-.001 3.999Z" />
      <path d="M17.77 3H6.23C4.45 3 3 4.45 3 6.23v11.54C3 19.55 4.45 21 6.23 21h11.54c1.78 0 3.23-1.45 3.23-3.23V6.23C21 4.45 19.55 3 17.77 3Z" />
    </g>
    <defs>
      <clipPath id="Image_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgImage;
