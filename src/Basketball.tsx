import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBasketball = ({
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
      clipPath="url(#Basketball_svg__a)"
    >
      <path d="M12 21a9 9 0 1 0-.001-18.001A9 9 0 0 0 12 21Z" />
      <path
        strokeLinecap="round"
        d="M3.02 11.43c1.93.7 3.93 1.17 5.97 1.38h.07a27.228 27.228 0 0 0 5.91 0h.06c1.96-.2 3.88-.64 5.73-1.29"
      />
      <path
        strokeLinecap="round"
        d="M5.77 5.51c1.13.76 2.01 1.82 2.56 3.06.53 1.26.78 2.61.74 3.97v.27c-.05 1.04-.3 2.06-.73 3.01a7.208 7.208 0 0 1-2.32 2.92M17.97 18.72c-1-.76-1.8-1.76-2.31-2.92-.4-.96-.64-1.98-.72-3.02v-.26a8.68 8.68 0 0 1 .74-3.99c.54-1.2 1.37-2.23 2.44-2.99"
      />
    </g>
    <defs>
      <clipPath id="Basketball_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBasketball;
