import * as React from "react";
const SvgLocation = ({ title, titleId, ...props }) => (
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
    <path
      stroke="currentColor"
      strokeWidth={1.5}
      d="M20 11.175C20 15.691 16.418 21 12 21s-8-5.31-8-9.825S7.582 3 12 3s8 3.66 8 8.175Z"
    />
    <path
      stroke="currentColor"
      strokeWidth={1.5}
      d="M9.5 10.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Z"
    />
  </svg>
);
export default SvgLocation;
