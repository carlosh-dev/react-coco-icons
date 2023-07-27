import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSlider = ({
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
      clipPath="url(#Slider_svg__a)"
    >
      <path d="M13.45 3h-3.17C8.66 3 7.36 4.31 7.36 5.92v12.17c0 1.61 1.3 2.92 2.92 2.92h3.17c1.62 0 2.92-1.31 2.92-2.92V5.92c0-1.61-1.3-2.92-2.92-2.92ZM3 20c.47-.01.92-.21 1.26-.54.34-.34.54-.79.54-1.26V5.8c0-.47-.2-.92-.54-1.26C3.93 4.2 3.48 4.01 3 4M21 4c-.48 0-.94.19-1.29.52-.34.34-.54.79-.55 1.28v12.41a1.829 1.829 0 0 0 1.84 1.8" />
    </g>
    <defs>
      <clipPath id="Slider_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSlider;
