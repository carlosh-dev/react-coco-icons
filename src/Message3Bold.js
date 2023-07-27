import * as React from "react";
const SvgMessage3Bold = ({ title, titleId, ...props }) => (
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
      d="M4.68 8.503a6.946 6.946 0 0 1 5.177-5.177 12.35 12.35 0 0 1 5.64 0 6.947 6.947 0 0 1 5.177 5.177 12.35 12.35 0 0 1 0 5.64 6.946 6.946 0 0 1-5.177 5.177 12.347 12.347 0 0 1-5.64 0 6.94 6.94 0 0 1-1.77-.681 2.547 2.547 0 1 1-2.726-2.725 6.94 6.94 0 0 1-.68-1.77 12.35 12.35 0 0 1 0-5.641ZM8.5 9.795c0-.337.274-.611.612-.611h3.056a.611.611 0 0 1 0 1.222H9.112a.611.611 0 0 1-.611-.61Zm1.63 2.445a.611.611 0 1 0 0 1.222h5.093a.611.611 0 0 0 0-1.222H10.13Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMessage3Bold;
