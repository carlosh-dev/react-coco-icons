import * as React from "react";
const SvgGrid3Bold = ({ title, titleId, ...props }) => (
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
      d="M11.282 3v5.402H3.517A7.637 7.637 0 0 1 9.03 3.325 12.979 12.979 0 0 1 11.282 3ZM12.718 3v11.159h8.102c.286-1.703.231-3.45-.164-5.136a7.639 7.639 0 0 0-5.686-5.698A12.98 12.98 0 0 0 12.718 3ZM20.483 15.598h-7.765V21c.756-.042 1.51-.15 2.252-.325a7.637 7.637 0 0 0 5.513-5.077ZM11.282 21V9.841H3.18a13.063 13.063 0 0 0 .164 5.136 7.638 7.638 0 0 0 5.686 5.698c.742.175 1.496.283 2.252.325Z"
    />
  </svg>
);
export default SvgGrid3Bold;
