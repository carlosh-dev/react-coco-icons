import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgVolumeHigh = ({
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
    <g stroke="#000" strokeWidth={1.5} clipPath="url(#Volume-High_svg__a)">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.23 8.89a3.957 3.957 0 0 1 1.59 3.18 3.957 3.957 0 0 1-1.59 3.18M18.89 6.95c.67.66 1.21 1.45 1.57 2.32.36.87.55 1.8.55 2.75s-.19 1.88-.55 2.75c-.36.87-.9 1.66-1.57 2.32"
      />
      <path
        strokeMiterlimit={10}
        d="M12.01 7.17v9.7c0 1.75-1.01 2.17-2.24.9a6.86 6.86 0 0 0-4.25-1.8c-.33 0-.66-.06-.96-.19-.31-.13-.59-.31-.82-.55-.23-.24-.42-.51-.55-.82-.13-.31-.19-.63-.19-.97v-2.99c0-.67.27-1.31.74-1.79.48-.47 1.12-.74 1.78-.74 1.58-.1 3.08-.74 4.25-1.8 1.23-1.13 2.24-.71 2.24 1.04v.01Z"
      />
    </g>
    <defs>
      <clipPath id="Volume-High_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgVolumeHigh;
