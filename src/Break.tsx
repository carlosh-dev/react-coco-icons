import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBreak = ({
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
      clipPath="url(#Break_svg__a)"
    >
      <path d="M20.99 13.1a9.003 9.003 0 0 1-3.09 5.73A9.066 9.066 0 0 1 11.76 21a9.095 9.095 0 0 1-6.1-2.67A9.105 9.105 0 0 1 3 12.23c-.07-2.24.7-4.43 2.16-6.14a8.945 8.945 0 0 1 5.73-3.08c.14-.02.29 0 .42.04.14.04.26.11.37.21.11.09.19.21.25.34.06.13.09.27.09.41v3.06c0 .24-.09.46-.24.64s-.36.3-.6.34a4 4 0 0 0-1.89.98c-.53.49-.92 1.11-1.12 1.81a4.033 4.033 0 0 0 1.01 3.98 4.033 4.033 0 0 0 3.98 1.01 4 4 0 0 0 2.79-3.01c.04-.23.17-.44.34-.59.18-.15.41-.24.64-.24h3.04c.14 0 .29.03.42.08.13.06.25.14.34.25.1.11.17.23.21.37.04.14.06.28.04.42l.01-.01Z" />
      <path d="M12.04 5.45c.86 0 1.7.17 2.49.5.79.33 1.51.81 2.11 1.41.6.61 1.08 1.32 1.41 2.11.33.79.49 1.64.49 2.49" />
    </g>
    <defs>
      <clipPath id="Break_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBreak;
