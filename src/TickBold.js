import * as React from "react";
const SvgTickBold = ({ title, titleId, ...props }) => (
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
      d="M17.5 7.44a.75.75 0 0 1 .06 1.06l-7.143 8a.75.75 0 0 1-1.12 0l-2.856-3.2a.75.75 0 1 1 1.118-1l2.298 2.574L16.441 7.5a.75.75 0 0 1 1.059-.06Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTickBold;
