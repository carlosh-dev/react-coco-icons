import * as React from "react";
const SvgChevronCircleLowBold = ({ title, titleId, ...props }) => (
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
      d="M9.03 3.344a13.006 13.006 0 0 1 5.94 0 7.63 7.63 0 0 1 5.686 5.686 13.006 13.006 0 0 1 0 5.94 7.63 7.63 0 0 1-5.686 5.686 13.006 13.006 0 0 1-5.94 0 7.63 7.63 0 0 1-5.686-5.686 13.006 13.006 0 0 1 0-5.94A7.63 7.63 0 0 1 9.03 3.344Zm.983 7.293a.574.574 0 0 0-.812.812l2.393 2.393a.574.574 0 0 0 .812 0l2.393-2.393a.574.574 0 0 0-.812-.813L12 12.624l-1.987-1.988Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgChevronCircleLowBold;
