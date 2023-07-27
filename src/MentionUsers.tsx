import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMentionUsers = ({
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
      clipPath="url(#Mention-users_svg__a)"
    >
      <path d="M12.9 11.46a2.104 2.104 0 0 1-.4 1.25c-.39.55-1.03.92-1.76.92-1.19 0-2.16-.97-2.16-2.16 0-1.19.97-2.16 2.16-2.16a2.12 2.12 0 0 1 1.82 1.01c.22.34.34.73.34 1.16v-.02Z" />
      <path d="M15.24 11.46c0 .88-.71 1.59-1.59 1.59-.42 0-.81-.16-1.09-.44.22-.34.34-.73.34-1.16 0-.43-.12-.82-.34-1.16.28-.27.67-.44 1.09-.44.88 0 1.59.71 1.59 1.59v.02ZM8.4 17.41c1.05-1.77 3.6-1.78 4.67-.02v.02M15.6 17.05c-.17-.58-.57-1.04-1.08-1.24l.48-.48" />
      <path d="M21 10.2v7.21c0 1.98-1.62 3.6-3.6 3.6H6.6a3.61 3.61 0 0 1-3.6-3.6V10.2c0-1.98 1.62-3.6 3.6-3.6h1.45a.9.9 0 0 0 .64-.26l3.32-3.32 3.32 3.32c.17.17.4.26.64.26h1.45c1.98 0 3.6 1.62 3.6 3.6H21Z" />
    </g>
    <defs>
      <clipPath id="Mention-users_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMentionUsers;
