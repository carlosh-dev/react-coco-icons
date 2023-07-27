import * as React from "react";
const SvgEdit3 = ({ title, titleId, ...props }) => (
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
      stroke="currentColor"
      strokeWidth={1.5}
      d="M15 11.424c-1.212.404-2.828-1.212-2.424-2.424m.498-.498-2.611 2.611a8.857 8.857 0 0 0-2.33 4.115l-.126.505c-.04.157.103.3.26.26l.505-.126a8.857 8.857 0 0 0 4.115-2.33l2.611-2.61a1.714 1.714 0 0 0-2.424-2.425Z"
    />
  </svg>
);
export default SvgEdit3;
