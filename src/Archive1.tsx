import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgArchive1 = ({
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
      clipPath="url(#Archive-1_svg__a)"
    >
      <path d="M17.49 20h-11c-.93 0-1.82-.37-2.47-1.03A3.495 3.495 0 0 1 3 16.49V9.83c.02-.54.17-1.07.42-1.54l1.85-3.07c.24-.35.55-.65.93-.86.37-.21.78-.33 1.21-.36h9.16c.42.02.85.14 1.22.36.37.21.69.51.93.86l1.85 3.07c.27.47.42 1 .43 1.54v6.66c0 .93-.37 1.82-1.03 2.48-.66.66-1.54 1.03-2.47 1.03h-.01Z" />
      <path d="m3 10 4.07.81c.27.07.52.21.72.41.2.19.35.43.43.7l.3 1.19c.17.52.49.98.92 1.31.43.33.96.52 1.5.54h2.09c.54-.02 1.07-.2 1.5-.54.44-.33.76-.79.92-1.31l.3-1.19c.08-.27.24-.51.44-.7.2-.19.45-.33.72-.4l4.07-.81" />
    </g>
    <defs>
      <clipPath id="Archive-1_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArchive1;
