import * as React from "react";
const SvgPlay = ({ title, titleId, ...props }) => (
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
      d="M18.158 8.605c2.456 1.509 2.456 5.281 0 6.79l-6.632 4.074C9.07 20.978 6 19.092 6 16.074V7.926c0-3.018 3.07-4.904 5.526-3.395l6.632 4.074Z"
    />
  </svg>
);
export default SvgPlay;
