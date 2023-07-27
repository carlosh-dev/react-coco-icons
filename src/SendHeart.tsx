import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSendHeart = ({
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
      clipPath="url(#Send-heart_svg__a)"
    >
      <path d="M3.18 7.57A5.016 5.016 0 0 1 7.99 4c1.64 0 3.1.79 4.01 2 .91-1.22 2.37-2 4.01-2 2.77 0 5.02 2.23 5.02 5 0 6.26-6.41 10.12-9.03 11M12.4 13.51H3.31" />
      <path d="m6.12 16.7-2.99-2.97a.308.308 0 0 1 0-.45l2.99-2.97" />
    </g>
    <defs>
      <clipPath id="Send-heart_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSendHeart;
