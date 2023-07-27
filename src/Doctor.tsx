import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDoctor = ({
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
      strokeWidth={1.5}
      clipPath="url(#Doctor_svg__a)"
    >
      <path strokeLinejoin="round" d="M6.85 19.29c.97-.27 1.81-.53 2.53-.77" />
      <path strokeLinejoin="round" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
      <path d="M16.34 19.62c-1.98-.74-4.34-2.07-4.34-2.07S7.86 15.3 6.9 12.3c-.6-1.87.1-4.01 2.07-4.65 1.03-.33 2.18-.14 3.03.51.81-.63 2-.84 3.03-.51 1.97.63 2.67 2.77 2.07 4.65-.46 1.46-1.7 2.75-2.84 3.69" />
    </g>
    <defs>
      <clipPath id="Doctor_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDoctor;
