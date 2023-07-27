import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAnnouncement = ({
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
      clipPath="url(#Announcement_svg__a)"
    >
      <path d="M16.92 14.61c-.49.44-1.31.45-2.28.08-1.28-.46-2.81-1.57-4.19-3.11-1.37-1.54-2.3-3.19-2.62-4.52-.25-1-.14-1.81.35-2.25 1.16-1.03 4.05.32 6.47 3.02s3.43 5.74 2.27 6.77v.01Z" />
      <path d="M7.86 5.29 3.17 15.8c-.66 1.47.74 3.03 2.28 2.55l10.98-3.47M6.64 18.08l.53 1.69c.29.92 1.29 1.44 2.21 1.15l1.69-.53c.92-.29 1.44-1.29 1.15-2.21l-.53-1.69M20.14 3.93l-.88.89M15.6 3l-.41.9M21 8.4l-.84.45" />
    </g>
    <defs>
      <clipPath id="Announcement_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAnnouncement;
