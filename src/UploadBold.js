import * as React from "react";
const SvgUploadBold = ({ title, titleId, ...props }) => (
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
      clipPath="url(#UploadBold_svg__a)"
    >
      <path d="M12 15.78V3.87M8.05 7.28l3.67-3.66c.15-.15.4-.15.56 0l3.67 3.66M21 15.78v1.89c0 1.56-1.27 2.83-2.84 2.83H5.84C4.27 20.5 3 19.23 3 17.67v-1.89" />
    </g>
    <defs>
      <clipPath id="UploadBold_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgUploadBold;
