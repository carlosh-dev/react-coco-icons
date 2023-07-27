import * as React from "react";
const SvgDownloadBold = ({ title, titleId, ...props }) => (
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
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      clipPath="url(#DownloadBold_svg__a)"
    >
      <path d="M12 3.5v11.91M15.95 12l-3.67 3.66c-.15.15-.4.15-.56 0L8.05 12" />
      <path d="M21 15.78v1.89c0 1.56-1.27 2.83-2.84 2.83H5.84C4.27 20.5 3 19.23 3 17.67v-1.89" />
    </g>
    <defs>
      <clipPath id="DownloadBold_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDownloadBold;
