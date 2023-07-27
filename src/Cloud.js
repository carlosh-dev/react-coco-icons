import * as React from "react";
const SvgCloud = ({ title, titleId, ...props }) => (
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
      d="M12 4c3.549 0 6.466 2.527 6.809 5.762A5.337 5.337 0 0 1 22 14.667C22 17.612 19.644 20 16.737 20h-10C4.12 20 2 17.851 2 15.2a4.798 4.798 0 0 1 3.164-4.529 6.095 6.095 0 0 1-.006-.271C5.158 6.865 8.22 4 12 4Z"
    />
  </svg>
);
export default SvgCloud;
