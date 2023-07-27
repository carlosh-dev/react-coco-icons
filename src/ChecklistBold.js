import * as React from "react";
const SvgChecklistBold = ({ title, titleId, ...props }) => (
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
      d="M14.97 3.344a13.006 13.006 0 0 0-5.94 0A7.63 7.63 0 0 0 3.344 9.03a13.006 13.006 0 0 0 0 5.94 7.63 7.63 0 0 0 5.686 5.686c1.953.459 3.987.459 5.94 0a7.63 7.63 0 0 0 5.686-5.686 13.006 13.006 0 0 0 0-5.94 7.63 7.63 0 0 0-5.686-5.686Zm-3.982 4.881a.6.6 0 0 1 0 .849l-1.914 1.914a.6.6 0 0 1-.849 0l-.957-.957a.6.6 0 1 1 .848-.848l.534.533 1.49-1.49a.6.6 0 0 1 .848 0Zm1.37 1.86a.6.6 0 0 1 .6-.6h3.35a.6.6 0 1 1 0 1.2h-3.35a.6.6 0 0 1-.6-.6Zm-1.37 2.927a.6.6 0 0 1 0 .848l-1.914 1.915a.6.6 0 0 1-.849 0l-.957-.957a.6.6 0 1 1 .848-.849l.534.533 1.49-1.49a.6.6 0 0 1 .848 0Zm1.37 1.86a.6.6 0 0 1 .6-.6h3.35a.6.6 0 1 1 0 1.2h-3.35a.6.6 0 0 1-.6-.6Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgChecklistBold;
