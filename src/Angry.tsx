import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAngry = ({
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
      clipPath="url(#Angry_svg__a)"
    >
      <path d="M12 21a9 9 0 1 0-.001-18.001A9 9 0 0 0 12 21Z" />
      <path d="M9 16.25a4.255 4.255 0 0 1 6 0" />
      <path fill="#000" d="M9.28 11.08a.46.46 0 1 0 0-.92.46.46 0 0 0 0 .92Z" />
      <path d="m7.89 9.46 2.68.69" />
      <path
        fill="#000"
        d="M14.72 11.08a.46.46 0 1 0 0-.92.46.46 0 0 0 0 .92Z"
      />
      <path d="m16.11 9.46-2.68.69" />
    </g>
    <defs>
      <clipPath id="Angry_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAngry;
