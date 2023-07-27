import * as React from "react";
const SvgArrowCircleLeftBold = ({ title, titleId, ...props }) => (
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
      d="M3.344 9.03a13.006 13.006 0 0 0 0 5.94 7.63 7.63 0 0 0 5.686 5.686c1.953.459 3.987.459 5.94 0a7.63 7.63 0 0 0 5.686-5.686 13.006 13.006 0 0 0 0-5.94 7.63 7.63 0 0 0-5.686-5.686 13.007 13.007 0 0 0-5.94 0A7.63 7.63 0 0 0 3.344 9.03Zm8.123 5.788a.6.6 0 0 1-.849 0l-2.393-2.394a.6.6 0 0 1 0-.848l2.393-2.393a.6.6 0 0 1 .849.848L10.098 11.4h5.252a.6.6 0 1 1 0 1.2h-5.252l1.369 1.369a.6.6 0 0 1 0 .849Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowCircleLeftBold;
