import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgQuestionCircle = ({
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
      clipPath="url(#Question-Circle_svg__a)"
    >
      <path
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.36 8.63c.32-.34.69-.61 1.12-.78.42-.17.89-.24 1.35-.21.47.04.91.17 1.31.4s.74.56.99.94c.25.39.42.82.49 1.29.05.45.02.93-.13 1.36-.13.43-.38.85-.7 1.16-.33.33-.72.58-1.16.74"
      />
      <path
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 12a9 9 0 1 0-18 0 9 9 0 0 0 18 0Z"
      />
      <path strokeWidth={2} d="M12 16.5h.01" />
    </g>
    <defs>
      <clipPath id="Question-Circle_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgQuestionCircle;
