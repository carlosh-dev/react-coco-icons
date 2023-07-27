import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPerson = ({
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
      clipPath="url(#Person_svg__a)"
    >
      <path d="M11.99 8.37c1.51 0 2.74-1.2 2.74-2.68 0-1.48-1.23-2.68-2.74-2.68-1.51 0-2.74 1.2-2.74 2.68 0 1.48 1.23 2.68 2.74 2.68ZM8.93 17.96l-1.36-.67a.952.952 0 0 1-.55-1.05l.54-3.17c.1-.58.4-1.11.86-1.5.46-.38 1.04-.59 1.65-.59h3.86c.6 0 1.19.21 1.65.59.46.38.77.91.87 1.5l.54 3.17c.03.21 0 .42-.1.61s-.26.34-.45.44l-1.37.67" />
      <path d="m9.44 15.96.41 4.09c.01.25.12.5.31.67.19.18.44.27.7.27h2.22a1.014 1.014 0 0 0 .97-.95l.41-4.09" />
    </g>
    <defs>
      <clipPath id="Person_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPerson;
