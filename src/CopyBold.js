import * as React from "react";
const SvgCopyBold = ({ title, titleId, ...props }) => (
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
      d="M16.236 16.904c-.393.093-.79.161-1.189.206a5.272 5.272 0 0 1-3.857 3.657 8.818 8.818 0 0 1-4.028 0 5.272 5.272 0 0 1-3.929-3.929 8.819 8.819 0 0 1 0-4.028A5.272 5.272 0 0 1 6.89 8.953c.045-.4.113-.796.206-1.19A6.032 6.032 0 0 1 11.59 3.27a10.17 10.17 0 0 1 4.645 0 6.032 6.032 0 0 1 4.495 4.495 10.17 10.17 0 0 1 0 4.645 6.032 6.032 0 0 1-4.495 4.495Zm-4.645 0c.635.15 1.28.236 1.928.262a3.85 3.85 0 0 1-2.654 2.217 7.397 7.397 0 0 1-3.379 0 3.85 3.85 0 0 1-2.87-2.87 7.398 7.398 0 0 1 0-3.378 3.851 3.851 0 0 1 2.218-2.654 10.17 10.17 0 0 0 .262 1.928 6.032 6.032 0 0 0 4.495 4.495Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCopyBold;
