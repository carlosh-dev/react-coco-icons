import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgArchive = ({
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
      clipPath="url(#Archive_svg__a)"
    >
      <path d="M3.9 16.03h3.23c.24 0 .47.1.64.26l1.27 1.26c.17.17.4.26.64.26h4.47c.34 0 .66-.19.8-.49l.4-.8c.15-.3.47-.49.8-.49h3.94c.49 0 .9.4.9.89v.89c0 1.49-1.21 2.68-2.7 2.68H5.69c-1.49 0-2.7-1.2-2.7-2.68v-.89a.9.9 0 0 1 .9-.89h.01Z" />
      <path d="M4.35 16.03V6.01c0-1.38 1.28-2.51 2.87-2.51h9.56c1.58 0 2.87 1.12 2.87 2.51v10.02" />
    </g>
    <defs>
      <clipPath id="Archive_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArchive;
