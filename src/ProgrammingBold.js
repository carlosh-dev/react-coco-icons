import * as React from "react";
const SvgProgrammingBold = ({ title, titleId, ...props }) => (
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
      d="M14.97 3.344a13.006 13.006 0 0 0-5.94 0A7.63 7.63 0 0 0 3.344 9.03a13.006 13.006 0 0 0 0 5.94 7.63 7.63 0 0 0 5.686 5.686c1.953.459 3.987.459 5.94 0a7.63 7.63 0 0 0 5.686-5.686 13.006 13.006 0 0 0 0-5.94 7.63 7.63 0 0 0-5.686-5.686ZM7.73 9.239a.574.574 0 0 1 .809-.073l1.989 1.657a1.532 1.532 0 0 1 0 2.354l-1.99 1.657a.574.574 0 1 1-.735-.882l1.99-1.658a.383.383 0 0 0 0-.588l-1.99-1.658a.574.574 0 0 1-.073-.809Zm4.749 4.58a.574.574 0 0 0 0 1.149h3.35a.574.574 0 0 0 0-1.15h-3.35Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgProgrammingBold;
