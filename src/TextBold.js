import * as React from "react";
const SvgTextBold = ({ title, titleId, ...props }) => (
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
      d="M14.97 3.344a13.006 13.006 0 0 0-5.94 0A7.63 7.63 0 0 0 3.344 9.03a13.006 13.006 0 0 0 0 5.94 7.63 7.63 0 0 0 5.686 5.686c1.953.459 3.987.459 5.94 0a7.63 7.63 0 0 0 5.686-5.686 13.006 13.006 0 0 0 0-5.94 7.63 7.63 0 0 0-5.686-5.686ZM8.554 9.128c0-.317.257-.574.574-.574h5.744a.574.574 0 0 1 0 1.149h-2.298v5.169a.574.574 0 0 1-1.148 0v-5.17H9.128a.574.574 0 0 1-.574-.574Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTextBold;
