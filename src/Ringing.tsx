import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgRinging = ({
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
      clipPath="url(#Ringing_svg__a)"
    >
      <path d="m19.49 19.75-.69.69c-.38.35-.86.54-1.38.56-1.39-.05-4.31-.84-8.94-5.48C3.85 10.89 3.04 7.94 3 6.61c.02-.51.21-1 .56-1.38l.69-.69.95-.95c.19-.2.42-.35.67-.45.27-.1.54-.13.82-.11.27.02.53.11.77.25s.44.33.59.56L9.4 5.73a1.57 1.57 0 0 1 .1 1.46L8.6 8.9a1.07 1.07 0 0 0 0 .86c.59 1.21 1.41 2.3 2.42 3.19.9 1 1.98 1.82 3.2 2.42.13.06.27.09.43.09.16 0 .29-.03.43-.09l1.72-.89c.24-.11.49-.15.75-.14.26.02.5.1.72.23l1.9 1.34c.23.15.43.35.57.59.13.24.23.5.25.77.03.27 0 .55-.1.81s-.26.49-.46.68l-.91.99h-.03Z" />
      <path
        strokeLinecap="round"
        d="M13.99 3c.92 0 1.83.18 2.69.53.85.35 1.62.87 2.28 1.52A6.968 6.968 0 0 1 21.01 10M13.99 7c.4 0 .79.08 1.15.23.37.15.7.37.98.65s.5.61.65.98c.15.36.23.76.23 1.15"
      />
    </g>
    <defs>
      <clipPath id="Ringing_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRinging;
