import * as React from "react";
const SvgCloseBold = ({ title, titleId, ...props }) => (
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
      d="M9.03 3.344a13.006 13.006 0 0 1 5.94 0 7.63 7.63 0 0 1 5.686 5.686 13.006 13.006 0 0 1 0 5.94 7.63 7.63 0 0 1-5.686 5.686 13.006 13.006 0 0 1-5.94 0 7.63 7.63 0 0 1-5.686-5.686 13.006 13.006 0 0 1 0-5.94A7.63 7.63 0 0 1 9.03 3.344Zm1.684 6.558a.574.574 0 0 0-.812.812L11.188 12l-1.286 1.286a.574.574 0 1 0 .812.812L12 12.812l1.286 1.286a.574.574 0 0 0 .812-.812L12.812 12l1.286-1.286a.574.574 0 0 0-.812-.812L12 11.188l-1.286-1.286Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCloseBold;
