import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSettings21 = ({
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
      clipPath="url(#Settings-2-1_svg__a)"
    >
      <path d="M12.01 14.4c1.34 0 2.43-1.09 2.43-2.43s-1.09-2.43-2.43-2.43-2.43 1.09-2.43 2.43 1.09 2.43 2.43 2.43Z" />
      <path
        strokeLinecap="round"
        d="M14.13 4.65c.18.64.6 1.19 1.17 1.53.57.34 1.24.44 1.88.28.47-.14.98-.12 1.44.07.46.19.84.53 1.09.96.25.43.34.94.27 1.44s-.31.95-.67 1.29a2.61 2.61 0 0 0 0 3.6c.36.34.59.8.67 1.29.07.5-.02 1-.27 1.44-.25.43-.63.77-1.09.96-.46.19-.96.21-1.44.07-.64-.16-1.32-.07-1.9.27-.57.34-1 .88-1.18 1.53A2.2 2.2 0 0 1 11.98 21c-.48 0-.94-.16-1.33-.45-.38-.29-.66-.7-.79-1.17-.18-.65-.61-1.19-1.18-1.53-.57-.33-1.25-.43-1.9-.27-.47.14-.98.11-1.43-.08a2.224 2.224 0 0 1-1.34-2.39c.07-.49.31-.95.66-1.29a2.61 2.61 0 0 0 0-3.6c-.36-.34-.59-.8-.66-1.29-.07-.49.02-1 .26-1.43.24-.43.62-.77 1.08-.96.46-.19.96-.22 1.43-.08.64.16 1.33.06 1.9-.27.57-.34 1-.89 1.18-1.53.12-.47.4-.89.78-1.19.38-.3.86-.46 1.34-.46.48 0 .96.16 1.34.46.38.3.66.72.78 1.19l.03-.01Z"
      />
    </g>
    <defs>
      <clipPath id="Settings-2-1_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSettings21;
