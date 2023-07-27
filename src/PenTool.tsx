import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPenTool = ({
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
      clipPath="url(#Pen-tool_svg__a)"
    >
      <path d="M10.46 15.7c1.2 0 2.17-.97 2.17-2.17s-.97-2.17-2.17-2.17-2.17.97-2.17 2.17.97 2.17 2.17 2.17Z" />
      <path d="m20.56 8.59-1.79 1.79c-.28.3-.47.68-.55 1.08l-1.08 6.21c-.09.44-.31.83-.64 1.15-.31.31-.72.53-1.15.61l-9.84 1.51a2 2 0 0 1-1.03-.02c-.33-.09-.65-.27-.89-.52-.25-.25-.43-.56-.53-.89-.09-.34-.09-.69 0-1.03l1.51-9.83c.09-.44.3-.84.62-1.16.31-.32.71-.54 1.14-.64l6.21-1.07c.4-.09.77-.28 1.07-.55l1.8-1.8c.4-.32.9-.47 1.41-.42.51.05.97.29 1.3.68l2.19 2.19c.39.33.64.79.68 1.3.06.51-.1 1.01-.42 1.41h-.01ZM13.16 5.67l5.16 5.16M8.93 15.07 3.6 20.41" />
    </g>
    <defs>
      <clipPath id="Pen-tool_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPenTool;
