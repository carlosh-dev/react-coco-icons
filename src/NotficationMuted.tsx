import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgNotficationMuted = ({
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
      clipPath="url(#Notfication-muted_svg__a)"
    >
      <path d="M14.04 17.67H6.01c-.56 0-1.05-.22-1.42-.59-.36-.37-.59-.87-.59-1.42 0-.55.23-1.11.62-1.5l.54-.54c.51-.5.79-1.2.79-1.91V9.77M10.27 21h3.14M2.98 3.03l18 17.97M19.69 15.67c0 1.11-.91 2-2.02 2h-.03L6.45 6.5c.3-.67.71-1.27 1.23-1.78A5.864 5.864 0 0 1 11.84 3a5.92 5.92 0 0 1 5.45 3.61c.32.76.44 1.58.44 2.4v2.7c0 .72.29 1.4.79 1.91l.54.55c.41.4.63.94.63 1.5v0Z" />
    </g>
    <defs>
      <clipPath id="Notfication-muted_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgNotficationMuted;
