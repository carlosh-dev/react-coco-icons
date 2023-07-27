import * as React from "react";
const SvgDocumentBold = ({ title, titleId, ...props }) => (
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
      d="M14.97 3.344a13.006 13.006 0 0 0-5.94 0A7.63 7.63 0 0 0 3.344 9.03a13.006 13.006 0 0 0 0 5.94 7.63 7.63 0 0 0 5.686 5.686c1.953.459 3.987.459 5.94 0a7.63 7.63 0 0 0 5.686-5.686 13.006 13.006 0 0 0 0-5.94 7.63 7.63 0 0 0-5.686-5.686ZM8.554 9.128c0-.317.257-.574.574-.574h3.83a.574.574 0 0 1 0 1.148h-3.83a.574.574 0 0 1-.574-.574Zm0 2.872c0-.317.257-.574.574-.574h5.744a.574.574 0 0 1 0 1.148H9.128A.574.574 0 0 1 8.554 12Zm0 2.872c0-.317.257-.575.574-.575H12a.574.574 0 1 1 0 1.15H9.128a.574.574 0 0 1-.574-.575Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgDocumentBold;
