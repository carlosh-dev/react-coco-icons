import * as React from "react";
const SvgGpsBold = ({ title, titleId, ...props }) => (
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
      d="M11.615 3.025c.256-.033.514-.033.77 0a2.485 2.485 0 0 1 2.159 2.464v.807a6.266 6.266 0 0 1 3.16 3.16h.807c1.247 0 2.3.924 2.464 2.16a2.94 2.94 0 0 1 0 .769 2.485 2.485 0 0 1-2.464 2.159h-.807a6.266 6.266 0 0 1-3.16 3.16v.807c0 1.247-.924 2.3-2.16 2.464a2.94 2.94 0 0 1-.769 0 2.485 2.485 0 0 1-2.159-2.464v-.807a6.266 6.266 0 0 1-3.16-3.16h-.807c-1.246 0-2.3-.924-2.464-2.16a2.933 2.933 0 0 1 0-.769A2.485 2.485 0 0 1 5.49 9.456h.807a6.265 6.265 0 0 1 3.16-3.16v-.807c0-1.246.924-2.3 2.16-2.464ZM12 9.132a2.868 2.868 0 1 0 0 5.736 2.868 2.868 0 0 0 0-5.736ZM10.242 12a1.758 1.758 0 1 1 3.516 0 1.758 1.758 0 0 1-3.516 0Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgGpsBold;
