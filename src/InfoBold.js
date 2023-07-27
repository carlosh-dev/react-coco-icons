import * as React from "react";
const SvgInfoBold = ({ title, titleId, ...props }) => (
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
      d="M9.03 3.344a13.006 13.006 0 0 1 5.94 0 7.63 7.63 0 0 1 5.686 5.686 13.006 13.006 0 0 1 0 5.94 7.63 7.63 0 0 1-5.686 5.686 13.006 13.006 0 0 1-5.94 0 7.63 7.63 0 0 1-5.686-5.686 13.006 13.006 0 0 1 0-5.94A7.63 7.63 0 0 1 9.03 3.344ZM12 10.085a.957.957 0 1 0 0-1.914.957.957 0 0 0 0 1.914Zm0 .718c.396 0 .718.322.718.718v3.83a.718.718 0 1 1-1.436 0v-3.83c0-.396.322-.718.718-.718Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgInfoBold;
