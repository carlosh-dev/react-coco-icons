import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCall = ({
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
    <g clipPath="url(#Call_svg__a)">
      <path
        stroke="#000"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M20.94 17.7c0 .32-.07.66-.23.98-.16.32-.35.63-.61.92-.44.49-.93.84-1.48 1.06-.54.23-1.13.34-1.76.34-.92 0-1.9-.22-2.94-.66-1.04-.44-2.07-1.03-3.1-1.78-1.04-.76-2.02-1.59-2.96-2.52a25.39 25.39 0 0 1-2.51-2.94c-.74-1.03-1.33-2.05-1.77-3.07-.43-1.03-.65-2.01-.65-2.94 0-.61.11-1.2.32-1.74.22-.55.56-1.05 1.04-1.5C4.87 3.28 5.5 3 6.16 3c.25 0 .5.05.73.16.23.11.44.27.6.5L9.58 6.6c.16.23.28.43.36.63.08.19.13.38.13.55 0 .22-.06.43-.19.64-.12.21-.29.42-.5.64l-.69.71c-.1.1-.14.22-.14.36 0 .07 0 .13.03.21.03.07.05.13.07.18.16.3.44.68.84 1.15.41.47.84.94 1.31 1.42.49.48.96.92 1.43 1.32s.86.67 1.16.83c.05.02.1.05.16.07.07.03.14.04.23.04.15 0 .27-.05.37-.15l.69-.67c.23-.23.44-.4.65-.5.21-.13.41-.19.64-.19.17 0 .35.04.55.12.2.08.41.2.63.35l2.98 2.11c.23.16.4.35.5.58.09.23.14.45.14.7h.01Z"
      />
    </g>
    <defs>
      <clipPath id="Call_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCall;
