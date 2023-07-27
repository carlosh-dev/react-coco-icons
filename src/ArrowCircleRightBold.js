import * as React from "react";
const SvgArrowCircleRightBold = ({ title, titleId, ...props }) => (
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
      d="M20.656 14.97a13.006 13.006 0 0 0 0-5.94 7.63 7.63 0 0 0-5.686-5.686 13.006 13.006 0 0 0-5.94 0A7.63 7.63 0 0 0 3.344 9.03a13.006 13.006 0 0 0 0 5.94 7.63 7.63 0 0 0 5.686 5.686c1.953.459 3.987.459 5.94 0a7.63 7.63 0 0 0 5.686-5.686ZM12.551 9.2a.574.574 0 0 1 .812 0l2.394 2.394a.574.574 0 0 1 0 .812L13.363 14.8a.574.574 0 0 1-.812-.812l1.413-1.413H8.649a.574.574 0 1 1 0-1.148h5.315l-1.413-1.413a.574.574 0 0 1 0-.812Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowCircleRightBold;
