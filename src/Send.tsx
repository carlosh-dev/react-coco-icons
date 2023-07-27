import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSend = ({
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
      clipPath="url(#Send_svg__a)"
    >
      <path d="m21 3-5.77 17.33c-.28.84-1.43.91-1.81.12l-3.21-6.65L21 3.01V3ZM21 3 10.21 13.79l-6.65-3.22c-.79-.38-.72-1.54.12-1.82l17.33-5.76L21 3Z" />
    </g>
    <defs>
      <clipPath id="Send_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSend;
