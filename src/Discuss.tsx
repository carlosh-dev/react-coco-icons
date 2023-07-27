import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDiscuss = ({
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
      clipPath="url(#Discuss_svg__a)"
    >
      <path d="M8.45 13.99c.19.93.59 1.81 1.17 2.57.59.76 1.34 1.37 2.22 1.79.86.42 1.82.65 2.78.65.96 0 1.92-.21 2.79-.62.2-.1.43-.13.64-.08l2.18.52c.08.02.16.02.24 0 .08-.02.15-.06.21-.12s.09-.13.11-.2c.03-.08.03-.16 0-.23l-.52-2.14a.864.864 0 0 1 .08-.63c.44-.89.65-1.87.63-2.86a6.12 6.12 0 0 0-.77-2.83 6.174 6.174 0 0 0-1.99-2.17c-.83-.56-1.78-.91-2.78-1.04-.99-.12-2.01-.01-2.95.32-.94.33-1.79.89-2.48 1.61-.68.72-1.18 1.6-1.46 2.55-.27.95-.31 1.95-.11 2.92l.01-.01Z" />
      <path d="M12.55 6.9a5.542 5.542 0 0 0-2.43-1.63c-.94-.32-1.97-.36-2.94-.13-.98.22-1.87.71-2.58 1.4a5.3 5.3 0 0 0-1.13 6c.13.25.16.54.09.81l-.57 2.33 2.37-.56c.28-.07.58-.03.83.09.7.31 1.46.47 2.23.47H9" />
    </g>
    <defs>
      <clipPath id="Discuss_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDiscuss;
