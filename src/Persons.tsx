import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPersons = ({
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
      clipPath="url(#Persons_svg__a)"
    >
      <path d="M8.97 8.37c1.51 0 2.73-1.2 2.73-2.68 0-1.48-1.22-2.68-2.73-2.68s-2.73 1.2-2.73 2.68c0 1.48 1.22 2.68 2.73 2.68ZM5.92 17.97l-1.36-.67c-.19-.1-.35-.25-.45-.44-.1-.19-.13-.41-.1-.62l.54-3.17c.1-.58.41-1.11.87-1.49.46-.38 1.04-.59 1.64-.59h3.84c.6 0 1.18.21 1.64.59.46.38.76.91.86 1.49l.54 3.17c.05.21.02.43-.08.62s-.26.35-.46.43l-1.35.67" />
      <path d="m6.42 15.97.42 4.08c.01.25.12.48.29.66.18.17.41.28.67.29h2.22c.25-.01.49-.11.67-.29.18-.17.28-.41.29-.66l.41-4.08M15.04 3c.72 0 1.42.28 1.93.79.51.5.8 1.19.8 1.9s-.29 1.39-.8 1.9c-.51.5-1.2.79-1.93.79M16.05 10.98h.89c.6 0 1.18.21 1.64.59.46.38.77.91.87 1.49l.54 3.17c.03.21 0 .43-.1.62s-.26.34-.45.44l-1.36.67" />
      <path d="M15.04 20.95h1.1c.13 0 .26-.01.38-.06a.944.944 0 0 0 .63-.88l.42-4.08" />
    </g>
    <defs>
      <clipPath id="Persons_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPersons;
