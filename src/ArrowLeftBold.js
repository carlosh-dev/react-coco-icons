import * as React from "react";
const SvgArrowLeftBold = ({ title, titleId, ...props }) => (
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
      d="M11.654 16.493a.75.75 0 0 1-1.059.072l-4.588-4a.75.75 0 0 1 0-1.13l4.588-4a.75.75 0 0 1 .986 1.13l-3.08 2.685H17.5a.75.75 0 0 1 0 1.5H8.502l3.08 2.685a.75.75 0 0 1 .072 1.058Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowLeftBold;
