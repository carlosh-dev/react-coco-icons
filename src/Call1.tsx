import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCall1 = ({
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
    <g clipPath="url(#Call-1_svg__a)">
      <path
        stroke="#000"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M18.88 20.44c-.38.35-.88.54-1.39.56-1.39 0-4.32-.85-8.99-5.48C3.84 10.89 3.03 7.93 3 6.59c0-.51.21-1 .55-1.38L5.2 3.57c.19-.2.42-.35.68-.45.27-.1.54-.13.82-.11.27.02.53.11.77.25s.44.33.59.56l1.34 1.9c.13.22.22.47.24.72 0 .26-.04.51-.14.75l-.95 1.72a1.07 1.07 0 0 0 0 .86c.6 1.21 1.42 2.3 2.43 3.2.91 1.01 1.99 1.83 3.21 2.42.13.06.29.09.44.09.14 0 .3-.03.43-.09l1.73-.89c.23-.11.49-.16.74-.14.26.01.51.09.72.23l1.91 1.35c.23.15.43.35.57.59.13.24.23.5.25.77.03.27 0 .55-.11.81s-.26.49-.46.68l-1.53 1.65Z"
      />
    </g>
    <defs>
      <clipPath id="Call-1_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCall1;
