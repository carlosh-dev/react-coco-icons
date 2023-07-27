import * as React from "react";
const SvgMenuBold = ({ title, titleId, ...props }) => (
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
      d="M3.25 12a.75.75 0 0 1 .75-.75h16a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75Zm3.283 7a.75.75 0 0 1 .75-.75H20a.75.75 0 0 1 0 1.5H7.283a.75.75 0 0 1-.75-.75Zm5.689-14a.75.75 0 0 1 .75-.75H20a.75.75 0 0 1 0 1.5h-7.028a.75.75 0 0 1-.75-.75Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMenuBold;
