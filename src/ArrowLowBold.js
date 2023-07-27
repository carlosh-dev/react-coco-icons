import * as React from "react";
const SvgArrowLowBold = ({ title, titleId, ...props }) => (
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
      d="M16.493 12.346a.75.75 0 0 1 .072 1.059l-4 4.588a.75.75 0 0 1-1.13 0l-4-4.588a.75.75 0 0 1 1.13-.986l2.685 3.08V6.5a.75.75 0 0 1 1.5 0v8.998l2.685-3.08a.75.75 0 0 1 1.058-.072Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowLowBold;
