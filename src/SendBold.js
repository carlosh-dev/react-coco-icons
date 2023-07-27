import * as React from "react";
const SvgSendBold = ({ title, titleId, ...props }) => (
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
      d="M9.12 4.384C6.324 2.985 3.223 5.637 4.174 8.612l1.087 3.402-1.08 3.37c-.955 2.974 2.142 5.628 4.937 4.234l8.927-4.452c2.603-1.298 2.606-5.008.005-6.31L9.119 4.383Z"
    />
  </svg>
);
export default SvgSendBold;
