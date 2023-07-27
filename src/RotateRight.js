import * as React from "react";
const SvgRotateRight = ({ title, titleId, ...props }) => (
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
      d="M21 12.152C21 17.04 16.97 21 12 21s-9-3.961-9-8.848c0-4.886 4-8.847 9-8.847 6 0 9 4.915 9 4.915m0 0V3m0 5.22h-4.655"
    />
  </svg>
);
export default SvgRotateRight;
