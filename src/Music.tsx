import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMusic = ({
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
      clipPath="url(#Music_svg__a)"
    >
      <path d="M7.58 21c1.97 0 3.58-1.6 3.58-3.58s-1.61-3.58-3.58-3.58S4 15.44 4 17.42 5.61 21 7.58 21ZM11.17 10.69l7.23-2.83c.46-.2.85-.53 1.13-.94.28-.41.44-.9.47-1.4 0-.41-.1-.81-.29-1.17-.19-.36-.46-.67-.8-.9-.33-.23-.72-.38-1.12-.42-.41-.05-.82 0-1.2.15L13.1 4.53c-.57.23-1.05.62-1.38 1.13-.34.51-.52 1.1-.51 1.71l-.03 3.33-.01-.01ZM11.17 10.69v6.73" />
    </g>
    <defs>
      <clipPath id="Music_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMusic;
