import * as React from "react";
const SvgMoreCircle = ({ title, titleId, ...props }) => (
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
      d="M3.353 8.95A7.511 7.511 0 0 1 8.95 3.353c2.006-.47 4.094-.47 6.1 0a7.511 7.511 0 0 1 5.597 5.597c.47 2.006.47 4.094 0 6.1a7.511 7.511 0 0 1-5.597 5.597c-2.006.47-4.094.47-6.1 0a7.511 7.511 0 0 1-5.597-5.597 13.354 13.354 0 0 1 0-6.1Z"
    />
    <path
      fill="currentColor"
      d="M9.055 12c0 .552-.46 1-1.028 1C7.46 13 7 12.552 7 12s.46-1 1.027-1c.568 0 1.028.448 1.028 1ZM13.027 12c0 .552-.46 1-1.027 1s-1.027-.448-1.027-1 .46-1 1.027-1 1.027.448 1.027 1ZM17 12c0 .552-.46 1-1.027 1-.568 0-1.028-.448-1.028-1s.46-1 1.028-1c.567 0 1.027.448 1.027 1Z"
    />
  </svg>
);
export default SvgMoreCircle;
