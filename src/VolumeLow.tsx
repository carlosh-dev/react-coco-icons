import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgVolumeLow = ({
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
    <g stroke="#000" strokeWidth={1.5} clipPath="url(#Volume-low_svg__a)">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.83 7.99c.64.46 1.16 1.07 1.52 1.76.36.7.55 1.46.55 2.24 0 .78-.19 1.55-.55 2.24-.36.7-.88 1.3-1.52 1.76"
      />
      <path
        strokeMiterlimit={10}
        d="M13.87 6.74V17.2c0 1.9-1.12 2.35-2.5.98a7.784 7.784 0 0 0-4.71-1.96c-.72 0-1.4-.29-1.92-.78-.52-.49-.81-1.16-.83-1.86v-3.23a2.648 2.648 0 0 1 .82-1.92c.26-.25.56-.45.9-.59.34-.14.7-.21 1.07-.2a7.76 7.76 0 0 0 4.71-1.96c1.32-1.26 2.45-.81 2.45 1.06h.01Z"
      />
    </g>
    <defs>
      <clipPath id="Volume-low_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgVolumeLow;
