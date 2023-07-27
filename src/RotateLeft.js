import * as React from "react";
const SvgRotateLeft = ({ title, titleId, ...props }) => (
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
      d="M3 12.152C3 17.04 7.03 21 12 21s9-3.961 9-8.848c0-4.886-4-8.847-9-8.847-6 0-9 4.915-9 4.915m0 0V3m0 5.22h4.655"
    />
  </svg>
);
export default SvgRotateLeft;
