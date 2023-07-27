import * as React from "react";
const SvgChevronCircleTopBold = ({ title, titleId, ...props }) => (
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
      d="M9.03 3.344a13.006 13.006 0 0 1 5.94 0 7.63 7.63 0 0 1 5.686 5.686 13.006 13.006 0 0 1 0 5.94 7.63 7.63 0 0 1-5.686 5.686 13.006 13.006 0 0 1-5.94 0 7.63 7.63 0 0 1-5.686-5.686 13.006 13.006 0 0 1 0-5.94A7.63 7.63 0 0 1 9.03 3.344Zm4.957 10.02a.574.574 0 0 0 .812-.813l-2.393-2.393a.574.574 0 0 0-.812 0L9.2 12.55a.574.574 0 0 0 .812.812L12 11.376l1.987 1.987Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgChevronCircleTopBold;
