import * as React from "react";
const SvgAddBold = ({ title, titleId, ...props }) => (
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
      d="M9.03 3.344a13.006 13.006 0 0 1 5.94 0 7.63 7.63 0 0 1 5.686 5.686 13.008 13.008 0 0 1 0 5.94 7.63 7.63 0 0 1-5.686 5.686 13.008 13.008 0 0 1-5.94 0 7.63 7.63 0 0 1-5.686-5.686 13.006 13.006 0 0 1 0-5.94A7.63 7.63 0 0 1 9.03 3.344Zm3.57 6.263a.6.6 0 1 0-1.2 0V11.4H9.607a.6.6 0 1 0 0 1.2H11.4v1.793a.6.6 0 1 0 1.2 0V12.6h1.793a.6.6 0 1 0 0-1.2H12.6V9.607Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgAddBold;
