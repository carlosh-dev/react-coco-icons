import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMessageBubble = ({
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
      clipPath="url(#Message-bubble_svg__a)"
    >
      <path d="M20.88 13.53c-.61 3.74-3.4 6.6-7.11 7.3-2.04.39-3.97.08-5.64-.7-.28-.14-.72-.19-1.02-.13-.62.15-1.68.41-2.57.61-.86.21-1.39-.32-1.17-1.17l.61-2.56c.07-.3 0-.75-.13-1.03-.76-1.59-1.06-3.44-.75-5.38.6-3.72 3.62-6.74 7.35-7.36 6.16-.99 11.41 4.25 10.4 10.41l.03.01ZM10.65 12h-1.8M15.15 12h-1.8" />
    </g>
    <defs>
      <clipPath id="Message-bubble_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMessageBubble;
