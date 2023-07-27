import * as React from "react";
const SvgChartBold = ({ title, titleId, ...props }) => (
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
      d="M9.03 3.344a13.006 13.006 0 0 1 5.94 0 7.63 7.63 0 0 1 5.686 5.686 13.006 13.006 0 0 1 0 5.94 7.63 7.63 0 0 1-5.686 5.686 13.006 13.006 0 0 1-5.94 0 7.63 7.63 0 0 1-5.686-5.686 13.006 13.006 0 0 1 0-5.94A7.63 7.63 0 0 1 9.03 3.344Zm3.544 5.784a.574.574 0 1 0-1.148 0v4.787a.574.574 0 0 0 1.148 0V9.128Zm-2.872 1.915a.574.574 0 0 0-1.148 0v3.829a.574.574 0 0 0 1.148 0v-3.83Zm5.744.957a.574.574 0 1 0-1.149 0v2.872a.574.574 0 1 0 1.15 0V12Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgChartBold;
