import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGraduationCap = ({
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
      clipPath="url(#graduation_cap_svg__a)"
    >
      <path d="M20.27 7.91c.98.49.98 1.29 0 1.79l-2.15 1.05-5.68 2.78c-.29.11-.63.11-.92 0l-5.64-2.78L3.73 9.7c-.98-.5-.98-1.3 0-1.79l7.82-3.82c.29-.11.63-.11.92 0l7.8 3.82v0Z" />
      <path d="M18.12 10.75v5.11c-.02.37-.14.72-.33 1.03-.2.31-.47.57-.79.75l-4.55 2.25c-.15.07-.3.1-.46.1-.16 0-.31-.03-.46-.1l-4.55-2.25a2.187 2.187 0 0 1-1.12-1.78v-5.11" />
    </g>
    <defs>
      <clipPath id="graduation_cap_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGraduationCap;
