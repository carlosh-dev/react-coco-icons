import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMentionUser = ({
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
      clipPath="url(#Mention-user_svg__a)"
    >
      <path d="M21 10.2v7.21c0 1.98-1.62 3.6-3.6 3.6H6.6a3.61 3.61 0 0 1-3.6-3.6V10.2c0-1.98 1.62-3.6 3.6-3.6h1.45a.9.9 0 0 0 .64-.26l3.32-3.32 3.32 3.32c.17.17.4.26.64.26h1.45c1.98 0 3.6 1.62 3.6 3.6H21Z" />
      <path d="M12 13.68a2.19 2.19 0 1 0 .001-4.379A2.19 2.19 0 0 0 12 13.68ZM9.63 17.41c1.06-1.79 3.65-1.8 4.73-.02v.02" />
    </g>
    <defs>
      <clipPath id="Mention-user_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMentionUser;
