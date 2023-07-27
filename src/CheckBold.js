import * as React from "react";
const SvgCheckBold = ({ title, titleId, ...props }) => (
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
      d="M9.03 3.344a13.006 13.006 0 0 1 5.94 0 7.63 7.63 0 0 1 5.686 5.686 13.006 13.006 0 0 1 0 5.94 7.63 7.63 0 0 1-5.686 5.686 13.006 13.006 0 0 1-5.94 0 7.63 7.63 0 0 1-5.686-5.686 13.006 13.006 0 0 1 0-5.94A7.63 7.63 0 0 1 9.03 3.344Zm6.022 7.133a.574.574 0 1 0-.84-.784l-2.944 3.156-1.494-1.495a.574.574 0 0 0-.813.813l1.915 1.914a.574.574 0 0 0 .826-.014l3.35-3.59Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCheckBold;
