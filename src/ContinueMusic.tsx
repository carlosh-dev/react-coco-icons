import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgContinueMusic = ({
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
      clipPath="url(#Continue-Music_svg__a)"
    >
      <path d="M12.13 21c1.41 0 2.56-1.15 2.56-2.56 0-1.41-1.15-2.56-2.56-2.56-1.41 0-2.56 1.15-2.56 2.56 0 1.41 1.15 2.56 2.56 2.56ZM14.68 11.02v7.42M14.69 13.65l5.26-2.05c.29-.13.55-.35.74-.62.18-.27.28-.58.3-.91v-.35c0-.27-.07-.53-.19-.76-.12-.23-.3-.44-.52-.58-.22-.15-.47-.24-.74-.27-.27-.03-.53 0-.78.1l-3.04 1.2c-.3.12-.57.33-.76.6-.19.27-.28.59-.28.92v2.71l.01.01ZM3 3h9M3 7h9M3 11h5" />
    </g>
    <defs>
      <clipPath id="Continue-Music_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgContinueMusic;
