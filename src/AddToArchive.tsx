import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAddToArchive = ({
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
      strokeMiterlimit={10}
      strokeWidth={1.5}
      clipPath="url(#Add-to-archive_svg__a)"
    >
      <path d="M6.77 10.68V6.46c.02-.92.38-1.8 1.03-2.44.64-.65 1.51-1.01 2.42-1.01h6.34c.91 0 1.79.37 2.44 1.03.65.66 1.02 1.55 1.02 2.48v12.76c0 1.79-1.06 2.27-2.37 1.06l-2.98-2.75c-.06-.05-.12-.09-.17-.13" />
      <path d="M9.42 21c2.99 0 5.42-2.47 5.42-5.51 0-3.04-2.43-5.51-5.42-5.51C6.43 9.98 4 12.45 4 15.49 4 18.53 6.43 21 9.42 21Z" />
      <path strokeLinecap="round" d="M11.38 15.49H7.44M9.42 17.49v-4.01" />
    </g>
    <defs>
      <clipPath id="Add-to-archive_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAddToArchive;
