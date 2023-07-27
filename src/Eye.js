import * as React from "react";
const SvgEye = ({ title, titleId, ...props }) => (
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
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.907 8.651c3.63-6.201 12.555-6.201 16.186 0a6.633 6.633 0 0 1 0 6.698c-3.63 6.201-12.555 6.201-16.186 0a6.633 6.633 0 0 1 0-6.698Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.557 12.06c0 1.996-1.593 3.613-3.558 3.613-1.964 0-3.556-1.617-3.556-3.612 0-1.997 1.592-3.614 3.556-3.614 1.965 0 3.558 1.617 3.558 3.614Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgEye;
