import * as React from "react";
const SvgRotateRightBold = ({ title, titleId, ...props }) => (
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
      d="M20.308 3a.692.692 0 0 0-.693.692v2.88a11.83 11.83 0 0 0-.945-.865C17.197 4.5 14.97 3.282 12 3.282c-4.988 0-9 3.956-9 8.859C3 17.045 7.04 21 12 21s9-3.955 9-8.86a.692.692 0 0 0-1.385 0c0 4.118-3.398 7.475-7.615 7.475-4.217 0-7.615-3.357-7.615-7.474 0-4.119 3.372-7.475 7.615-7.475 2.568 0 4.494 1.049 5.792 2.112.44.361.806.722 1.097 1.04h-2.878a.692.692 0 1 0 0 1.385h4.297c.382 0 .692-.31.692-.692V3.692A.692.692 0 0 0 20.308 3Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgRotateRightBold;
