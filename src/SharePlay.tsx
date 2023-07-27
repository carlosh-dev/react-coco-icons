import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSharePlay = ({
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
      clipPath="url(#Share-play_svg__a)"
    >
      <path d="M18.92 18A9.681 9.681 0 0 0 21 12c0-2.25-.77-4.33-2.08-6M5.08 6A9.681 9.681 0 0 0 3 12c0 2.25.77 4.33 2.08 6M16.01 16.01A6.499 6.499 0 0 0 17.4 12c0-1.5-.52-2.9-1.39-4.01M7.99 7.99A6.499 6.499 0 0 0 6.6 12c0 1.5.52 2.9 1.39 4.01M12 13.73c.994 0 1.8-.774 1.8-1.73s-.806-1.73-1.8-1.73-1.8.774-1.8 1.73.806 1.73 1.8 1.73Z" />
    </g>
    <defs>
      <clipPath id="Share-play_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSharePlay;
