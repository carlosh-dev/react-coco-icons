import * as React from "react";
const SvgSend = ({ title, titleId, ...props }) => (
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
      strokeWidth={1.5}
      d="m5.359 12.016-1.212 4.03c-.766 2.547 1.72 4.821 3.965 3.627l9.319-4.958c2.09-1.112 2.092-4.29.004-5.406L8.11 4.329C5.867 3.131 3.377 5.402 4.14 7.951l1.218 4.065Zm0 0h2.97"
    />
  </svg>
);
export default SvgSend;
