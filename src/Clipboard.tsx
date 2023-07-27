import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgClipboard = ({
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
      clipPath="url(#Clipboard_svg__a)"
    >
      <path d="M19 7.5v10.8c0 1.48-1.22 2.7-2.71 2.7H7.71C6.22 21 5 19.78 5 18.3V7.5c0-1.49 1.22-2.7 2.71-2.7h.68v1.8c0 .49.41.9.9.9h5.42c.5 0 .9-.41.9-.9V4.8h.68A2.71 2.71 0 0 1 19 7.5v0Z" />
      <path d="M15.61 4.8v1.8c0 .49-.41.9-.9.9H9.29c-.5 0-.9-.4-.9-.9V4.8h1.04c.38 0 .74-.21.86-.57C10.53 3.52 11.21 3 12 3c.5 0 .95.2 1.27.53.2.19.35.43.44.7.12.35.48.57.86.57h1.04v0ZM8.84 13.8h2.26M8.84 16.5h4.97" />
    </g>
    <defs>
      <clipPath id="Clipboard_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgClipboard;
