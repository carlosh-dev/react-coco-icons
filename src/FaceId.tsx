import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFaceId = ({
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
      clipPath="url(#Face-Id_svg__a)"
    >
      <path d="M15.55 3h1.85C19.38 3 21 4.62 21 6.6v1.71M3 8.35V6.6C3 4.62 4.62 3 6.6 3h1.72M8.35 21H6.6A3.61 3.61 0 0 1 3 17.4v-1.79M21 15.61v1.79c0 1.98-1.62 3.6-3.6 3.6h-1.78M8.4 7.61v1.8M15.6 7.61v1.8M12 8.96v3.16c0 .28-.13.54-.35.71l-.55.43M14.49 16.02a3.11 3.11 0 0 1-2.45 1.2c-.99 0-1.96-.51-2.52-1.29" />
    </g>
    <defs>
      <clipPath id="Face-Id_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFaceId;
