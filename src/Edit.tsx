import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgEdit = ({
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
      clipPath="url(#Edit_svg__a)"
    >
      <path d="m7.88 17.74-3.87.55c-.36.05-.62-.2-.57-.57l.55-3.89c.06-.45.27-.87.6-1.21l9.2-9.25a3.145 3.145 0 0 1 4.48 0 3.187 3.187 0 0 1 0 4.5l-9.2 9.25c-.32.34-.74.55-1.19.61v.01Z" />
      <path strokeLinecap="round" d="M15.73 5.96 14.4 7.3M13.61 20.44h5.83" />
    </g>
    <defs>
      <clipPath id="Edit_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgEdit;
