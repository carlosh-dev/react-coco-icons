import * as React from "react";
const SvgArrowCircleTopBold = ({ title, titleId, ...props }) => (
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
      fill="currentColor"
      fillRule="evenodd"
      d="M14.97 3.344a13.006 13.006 0 0 0-5.94 0A7.63 7.63 0 0 0 3.344 9.03a13.006 13.006 0 0 0 0 5.94 7.63 7.63 0 0 0 5.686 5.686c1.953.459 3.987.459 5.94 0a7.63 7.63 0 0 0 5.686-5.686 13.006 13.006 0 0 0 0-5.94 7.63 7.63 0 0 0-5.686-5.686Zm-5.787 8.123a.6.6 0 0 1 0-.849l2.393-2.393a.6.6 0 0 1 .848 0l2.394 2.393a.6.6 0 1 1-.85.849L12.6 10.098v5.252a.6.6 0 1 1-1.2 0v-5.252l-1.369 1.369a.6.6 0 0 1-.848 0Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowCircleTopBold;
