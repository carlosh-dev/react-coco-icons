import * as React from "react";
const SvgArrowTopBold = ({ title, titleId, ...props }) => (
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
      d="M7.507 11.654a.75.75 0 0 1-.072-1.059l4-4.588a.75.75 0 0 1 1.13 0l4 4.588a.75.75 0 1 1-1.13.986l-2.685-3.08V17.5a.75.75 0 0 1-1.5 0V8.502l-2.685 3.08a.75.75 0 0 1-1.058.072Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowTopBold;
