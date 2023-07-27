import * as React from "react";
const SvgClockBold = ({ title, titleId, ...props }) => (
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
      d="M9.03 3.344a13.006 13.006 0 0 1 5.94 0 7.63 7.63 0 0 1 5.686 5.686 13.008 13.008 0 0 1 0 5.94 7.63 7.63 0 0 1-5.686 5.686 13.008 13.008 0 0 1-5.94 0 7.63 7.63 0 0 1-5.686-5.686 13.006 13.006 0 0 1 0-5.94A7.63 7.63 0 0 1 9.03 3.344Zm3.246 5.784a.6.6 0 1 0-1.2 0v3.536a.6.6 0 0 0 .278.507l2.717 1.728a.6.6 0 1 0 .644-1.012l-2.44-1.552V9.128Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgClockBold;
