import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgNotebook = ({
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      clipPath="url(#Notebook_svg__a)"
    >
      <path d="M15.2 3H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h8.2a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4Z" />
      <path
        strokeLinecap="round"
        d="M10.56 12.9h3.24M8.4 16.5h5.4M21 7.95h-1.8M21 16.05h-1.8"
      />
    </g>
    <defs>
      <clipPath id="Notebook_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgNotebook;
