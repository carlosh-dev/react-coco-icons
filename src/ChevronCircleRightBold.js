import * as React from "react";
const SvgChevronCircleRightBold = ({ title, titleId, ...props }) => (
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
      d="M9.03 3.344a13.006 13.006 0 0 1 5.94 0 7.63 7.63 0 0 1 5.686 5.686 13.006 13.006 0 0 1 0 5.94 7.63 7.63 0 0 1-5.686 5.686 13.006 13.006 0 0 1-5.94 0 7.63 7.63 0 0 1-5.686-5.686 13.006 13.006 0 0 1 0-5.94A7.63 7.63 0 0 1 9.03 3.344Zm1.607 10.643a.574.574 0 0 0 .812.812l2.393-2.393a.574.574 0 0 0 0-.812L11.449 9.2a.574.574 0 0 0-.813.812L12.624 12l-1.988 1.987Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgChevronCircleRightBold;
