import * as React from "react";
const SvgEyeBold = ({ title, titleId, ...props }) => (
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
      d="M3.938 8.58c3.618-6.107 12.506-6.107 16.124 0a6.705 6.705 0 0 1 0 6.84c-3.618 6.107-12.506 6.107-16.124 0a6.705 6.705 0 0 1 0-6.84Zm5.427 3.475A2.639 2.639 0 0 1 12 9.41a2.64 2.64 0 0 1 2.636 2.645 2.64 2.64 0 0 1-2.636 2.643 2.639 2.639 0 0 1-2.634-2.643ZM12 8.17a3.875 3.875 0 0 0-3.868 3.884 3.875 3.875 0 0 0 3.868 3.882 3.876 3.876 0 0 0 3.87-3.882 3.876 3.876 0 0 0-3.87-3.884Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgEyeBold;
