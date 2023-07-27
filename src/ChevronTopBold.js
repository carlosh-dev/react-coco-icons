import * as React from "react";
const SvgChevronTopBold = ({ title, titleId, ...props }) => (
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
      d="M17.53 15.03a.75.75 0 0 1-1.06 0L12 10.56l-4.47 4.47a.75.75 0 0 1-1.06-1.06l5-5a.75.75 0 0 1 1.06 0l5 5a.75.75 0 0 1 0 1.06Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgChevronTopBold;
