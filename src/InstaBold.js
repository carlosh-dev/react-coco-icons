import * as React from "react";
const SvgInstaBold = ({ title, titleId, ...props }) => (
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
      d="M14.97 3.344a13.006 13.006 0 0 0-5.94 0A7.63 7.63 0 0 0 3.344 9.03a13.006 13.006 0 0 0 0 5.94 7.63 7.63 0 0 0 5.686 5.686c1.953.459 3.987.459 5.94 0a7.63 7.63 0 0 0 5.686-5.686 13.006 13.006 0 0 0 0-5.94 7.63 7.63 0 0 0-5.686-5.686ZM8.554 12a3.446 3.446 0 1 1 6.892 0 3.446 3.446 0 0 1-6.892 0ZM12 9.703a2.297 2.297 0 1 0 0 4.594 2.297 2.297 0 0 0 0-4.594Zm3.83-1.053a.957.957 0 1 0 0-1.915.957.957 0 0 0 0 1.914Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgInstaBold;
