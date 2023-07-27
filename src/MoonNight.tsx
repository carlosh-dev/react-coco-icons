import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMoonNight = ({
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
      strokeMiterlimit={10}
      strokeWidth={1.5}
      clipPath="url(#Moon-night_svg__a)"
    >
      <path d="M18.14 16.27c-.99-.18-1.89-.65-2.61-1.37a5.06 5.06 0 0 1-1.38-2.62c-.13-.71-.1-1.45.08-2.15.03-.1.03-.2 0-.3a.654.654 0 0 0-.17-.26.526.526 0 0 0-.27-.13c-.1-.02-.21 0-.3.03a5.602 5.602 0 0 0-2.88 2.33 5.734 5.734 0 0 0-.82 3.64c.14 1.27.71 2.46 1.6 3.36.9.91 2.06 1.48 3.32 1.62 1.28.21 2.59-.02 3.73-.66a5.812 5.812 0 0 0 2.52-2.86c.04-.1.05-.2.03-.3a.62.62 0 0 0-.13-.27.544.544 0 0 0-.26-.16.61.61 0 0 0-.3 0c-.71.18-1.45.21-2.16.08v.02Z" />
      <path
        strokeLinecap="round"
        d="M6.94 15.4h-.42a3.77 3.77 0 0 1-2.29-.96 3.818 3.818 0 0 1-1.18-2.19c-.14-.84 0-1.71.42-2.46a3.74 3.74 0 0 1 1.86-1.65M8.9 8.78c-.66-.54-1.49-.84-2.35-.84-.41 0-.81.07-1.19.21.3-1.32 1.03-2.5 2.07-3.34a5.86 5.86 0 0 1 7.36 0c1.04.84 1.77 2.02 2.07 3.34"
      />
    </g>
    <defs>
      <clipPath id="Moon-night_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMoonNight;
