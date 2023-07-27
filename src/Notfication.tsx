import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgNotfication = ({
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      clipPath="url(#Notfication_svg__a)"
    >
      <path d="M17.77 17.67c1.13 0 2.05-.9 2.06-2.01 0-.56-.23-1.1-.64-1.5l-.55-.54c-.52-.51-.81-1.19-.81-1.91V9c0-.82-.13-1.64-.46-2.4-.98-2.26-3.2-3.62-5.55-3.61-3.31 0-5.99 2.63-5.99 5.87v2.84c0 .72-.29 1.4-.81 1.91l-.55.54c-.41.4-.64.94-.64 1.5 0 1.11.92 2.01 2.06 2.01h11.89l-.01.01ZM10.26 21h3.13" />
    </g>
    <defs>
      <clipPath id="Notfication_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgNotfication;
