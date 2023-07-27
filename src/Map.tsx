import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMap = ({
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
      clipPath="url(#Map_svg__a)"
    >
      <path d="m19.72 19.58-4.23-1.36L8.57 20 3.7 18.45a1.053 1.053 0 0 1-.69-.95V5.37a.983.983 0 0 1 .39-.84.8.8 0 0 1 .44-.17c.16-.02.32 0 .47.06l4.23 1.36L15.46 4l4.84 1.55c.2.07.37.2.49.37.12.17.2.37.21.58v12.12c.01.16-.02.32-.08.46-.07.15-.17.27-.29.37-.13.1-.28.16-.43.18-.16.02-.32 0-.47-.05h-.01ZM8.56 5.77v14.15M15.49 4.08v14.15" />
    </g>
    <defs>
      <clipPath id="Map_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMap;
