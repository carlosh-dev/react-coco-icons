import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHorizontalSlide = ({
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
      clipPath="url(#Horizontal-Slide_svg__a)"
    >
      <path d="M18.08 7.62H5.91c-1.62 0-2.92 1.3-2.92 2.91v3.16c0 1.61 1.3 2.91 2.92 2.91h12.17c1.62 0 2.92-1.3 2.92-2.91v-3.16c0-1.61-1.3-2.91-2.92-2.91ZM20 21c0-.47-.2-.92-.54-1.26a1.84 1.84 0 0 0-1.26-.54H5.77c-.47.01-.92.2-1.26.54-.34.33-.54.78-.54 1.26M4 3c0 .48.18.94.53 1.29.33.34.79.54 1.27.56h12.41c.48-.01.94-.21 1.27-.56.34-.34.53-.81.53-1.29" />
    </g>
    <defs>
      <clipPath id="Horizontal-Slide_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHorizontalSlide;
