import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgIncognito = ({
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
      clipPath="url(#Incognito_svg__a)"
    >
      <path d="M3 10.57s.77.18 1.98.37c2.32.4 4.67.61 7.02.64 3.02-.05 6.04-.39 9-1.01" />
      <path d="M19 10.81V7.06c.02-.44-.07-.88-.24-1.29-.18-.41-.44-.77-.77-1.06-.33-.29-.72-.5-1.15-.61-.42-.11-.86-.13-1.29-.05-1.17.21-2.15.4-3.54.4-1.39 0-2.37-.19-3.54-.4-.43-.08-.87-.07-1.29.05-.42.11-.81.32-1.15.61-.33.29-.59.65-.77 1.06-.18.41-.26.85-.24 1.29v3.86M7.36 20C8.82 20 10 18.8 10 17.32c0-1.48-1.18-2.68-2.64-2.68-1.46 0-2.64 1.2-2.64 2.68C4.72 18.8 5.9 20 7.36 20v0ZM16.63 20c1.46 0 2.64-1.2 2.64-2.68 0-1.48-1.18-2.68-2.64-2.68-1.46 0-2.64 1.2-2.64 2.68 0 1.48 1.18 2.68 2.64 2.68ZM10 17.32h4" />
    </g>
    <defs>
      <clipPath id="Incognito_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIncognito;
