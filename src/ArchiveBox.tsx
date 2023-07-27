import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgArchiveBox = ({
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
      strokeMiterlimit={10}
      strokeWidth={1.5}
      clipPath="url(#Archive-Box_svg__a)"
    >
      <path d="M16.33 3h1.17c.93 0 1.81.37 2.46 1.03.65.65 1.02 1.54 1.03 2.47v11c0 .93-.37 1.82-1.02 2.47-.65.66-1.54 1.03-2.47 1.03h-11c-.93 0-1.82-.38-2.47-1.03A3.567 3.567 0 0 1 3 17.5v-11c0-.93.38-1.81 1.03-2.47C4.69 3.38 5.57 3.01 6.5 3h9.83Z" />
      <path d="m14.79 13.18-1.95-1.77a1.255 1.255 0 0 0-1.65 0l-1.95 1.77c-.85.78-1.55.46-1.55-.69V3.02h8.67v9.47c0 1.16-.66 1.47-1.55.69h-.02Z" />
    </g>
    <defs>
      <clipPath id="Archive-Box_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArchiveBox;
