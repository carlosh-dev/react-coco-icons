import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHeadset1 = ({
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
      clipPath="url(#Headset-1_svg__a)"
    >
      <path d="M4.03 15.39a8.62 8.62 0 0 1-.81-3.63c0-1.31.29-2.6.86-3.78a8.75 8.75 0 0 1 5.9-4.74c1.28-.3 2.6-.31 3.89-.04 1.28.28 2.49.84 3.52 1.64a8.75 8.75 0 0 1 2.47 3c.59 1.17.9 2.46.93 3.76.02 1.31-.25 2.6-.79 3.79" />
      <path d="M16.12 17.91c-.57.98-.23 2.24.76 2.81.99.57 2.25.23 2.82-.75l1.03-1.78c.57-.98.23-2.24-.76-2.81-.99-.57-2.25-.23-2.82.75l-1.03 1.78ZM6.85 16.13a2.069 2.069 0 0 0-2.82-.75c-.99.57-1.33 1.83-.76 2.81l1.03 1.78c.57.98 1.83 1.32 2.82.75.99-.57 1.33-1.83.76-2.81l-1.03-1.78Z" />
    </g>
    <defs>
      <clipPath id="Headset-1_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHeadset1;
