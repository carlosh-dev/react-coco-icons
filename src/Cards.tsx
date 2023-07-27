import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCards = ({
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
      strokeMiterlimit={10}
      strokeWidth={1.5}
      clipPath="url(#Cards_svg__a)"
    >
      <path d="M17.35 6.5v8.96c0 .8-.32 1.56-.88 2.12s-1.33.88-2.12.88H9.66c-.8 0-1.56-.32-2.12-.88s-.88-1.33-.88-2.12V6.5c0-.39.07-.78.23-1.15.15-.36.37-.7.65-.97a3.008 3.008 0 0 1 2.12-.88h4.69c.8 0 1.56.32 2.12.88s.88 1.32.88 2.12Z" />
      <path d="m10.88 18.6 1.11.44 3.25 1.24c.37.14.76.21 1.15.2.39 0 .78-.1 1.14-.26.36-.16.68-.39.96-.68.27-.29.48-.62.62-.99l1.68-4.37c.29-.74.27-1.56-.04-2.29-.32-.73-.91-1.3-1.64-1.59l-1.73-.66" />
      <path d="m13.12 18.62-1.11.44-3.26 1.24c-.37.14-.76.21-1.15.2-.39 0-.78-.1-1.14-.26-.36-.16-.68-.39-.96-.68-.27-.29-.48-.62-.62-.99L3.2 14.2c-.28-.74-.26-1.57.06-2.29.32-.73.92-1.29 1.66-1.58l1.7-.65" />
    </g>
    <defs>
      <clipPath id="Cards_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCards;
