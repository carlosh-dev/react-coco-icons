import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAlarm = ({
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
      strokeWidth={1.5}
      clipPath="url(#Alarm_svg__a)"
    >
      <path d="M12 6.6c3.43 0 6.22 2.79 6.22 6.22V21H5.78v-8.18C5.78 9.39 8.57 6.6 12 6.6v0ZM4 21h16M13.78 14.7h-3.56" />
      <path
        strokeLinejoin="round"
        d="M12 3v.9M6.37 4.8l.59.9M17.63 4.8l-.59.9"
      />
    </g>
    <defs>
      <clipPath id="Alarm_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAlarm;
