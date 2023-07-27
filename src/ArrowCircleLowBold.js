import * as React from "react";
const SvgArrowCircleLowBold = ({ title, titleId, ...props }) => (
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
      d="M14.97 20.656a13.008 13.008 0 0 1-5.94 0 7.63 7.63 0 0 1-5.686-5.686 13.006 13.006 0 0 1 0-5.94A7.63 7.63 0 0 1 9.03 3.344a13.006 13.006 0 0 1 5.94 0 7.63 7.63 0 0 1 5.686 5.686 13.008 13.008 0 0 1 0 5.94 7.63 7.63 0 0 1-5.686 5.686Zm-.152-7.274a.6.6 0 0 0-.849-.849L12.6 13.902V8.649a.6.6 0 1 0-1.2 0v5.253l-1.369-1.369a.6.6 0 1 0-.848.849l2.393 2.393a.6.6 0 0 0 .848 0l2.394-2.393Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowCircleLowBold;
