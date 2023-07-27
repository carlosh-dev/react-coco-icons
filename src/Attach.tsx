import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAttach = ({
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
    <g clipPath="url(#Attach_svg__a)">
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m13.99 7.6-5.66 5.28c-.44.42-.69.99-.67 1.58.02.59.26 1.15.71 1.56.45.41 1.06.65 1.69.65.63 0 1.23-.22 1.69-.63l5.86-5.45c.88-.84 1.36-1.98 1.35-3.15-.01-1.18-.51-2.3-1.4-3.13-.89-.83-2.1-1.3-3.36-1.31-1.26 0-2.48.44-3.39 1.26L5.14 9.53c-.67.62-1.2 1.36-1.57 2.18a6.373 6.373 0 0 0 0 5.14c.37.82.89 1.56 1.57 2.18.68.62 1.47 1.12 2.34 1.46.88.34 1.82.51 2.77.51s1.88-.17 2.77-.51c.87-.34 1.67-.83 2.34-1.46l5.67-5.27"
      />
    </g>
    <defs>
      <clipPath id="Attach_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAttach;
