import * as React from "react";
const SvgEdit2Bold = ({ title, titleId, ...props }) => (
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
      d="M16.572 3c-1.174 0-2.3.467-3.13 1.297L8.218 9.519a18.715 18.715 0 0 0-4.923 8.694l-.252 1.01a1.43 1.43 0 0 0 1.733 1.733l1.01-.252a18.715 18.715 0 0 0 8.694-4.923l5.222-5.222A4.428 4.428 0 0 0 16.573 3Zm-1.5 5.929c.799.799 1.725 1.14 2.413 1.02l.804-.804a2.428 2.428 0 0 0-3.434-3.434l-.804.804c-.12.688.22 1.614 1.02 2.414Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgEdit2Bold;
