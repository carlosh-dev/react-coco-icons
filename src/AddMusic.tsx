import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAddMusic = ({
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
      strokeWidth={1.5}
      clipPath="url(#add-music_svg__a)"
    >
      <path
        strokeLinejoin="round"
        d="M7.07 21c1.97 0 3.57-1.6 3.57-3.58s-1.6-3.58-3.57-3.58c-1.97 0-3.57 1.6-3.57 3.58S5.1 21 7.07 21ZM10.64 10.69l7.2-2.83c.45-.21.85-.53 1.13-.95.27-.41.43-.9.46-1.4 0-.41-.1-.81-.29-1.17-.19-.36-.46-.67-.8-.9-.33-.23-.72-.38-1.12-.42-.4-.04-.82 0-1.2.15l-3.47 1.35c-.56.23-1.04.62-1.37 1.12-.34.51-.52 1.1-.51 1.71l-.03 3.33v.01Z"
      />
      <path strokeMiterlimit={10} d="M14.5 16.99h6M17.51 13.98V20" />
      <path strokeLinejoin="round" d="M10.64 10.72v6.71" />
    </g>
    <defs>
      <clipPath id="add-music_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAddMusic;
