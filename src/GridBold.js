import * as React from "react";
const SvgGridBold = ({ title, titleId, ...props }) => (
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
      d="M9.03 3.344a12.998 12.998 0 0 1 5.94 0 7.633 7.633 0 0 1 5.558 5.214H3.472A7.633 7.633 0 0 1 9.03 3.344ZM3.205 9.707a13.024 13.024 0 0 0 .139 5.272 7.633 7.633 0 0 0 5.686 5.69c.789.185 1.591.295 2.396.331V9.707H3.205ZM12.574 21a13.002 13.002 0 0 0 2.396-.331 7.633 7.633 0 0 0 5.686-5.69c.406-1.732.453-3.526.14-5.272h-8.222V21Z"
    />
  </svg>
);
export default SvgGridBold;
