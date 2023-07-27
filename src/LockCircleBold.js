import * as React from "react";
const SvgLockCircleBold = ({ title, titleId, ...props }) => (
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
      d="M14.97 3.344a13.006 13.006 0 0 0-5.94 0A7.63 7.63 0 0 0 3.344 9.03a13.006 13.006 0 0 0 0 5.94 7.63 7.63 0 0 0 5.686 5.686c1.953.459 3.987.459 5.94 0a7.63 7.63 0 0 0 5.686-5.686 13.006 13.006 0 0 0 0-5.94 7.63 7.63 0 0 0-5.686-5.686ZM12 8.745a1.819 1.819 0 0 0-1.01 3.332c.214.143.307.41.227.655l-.657 2.022a.383.383 0 0 0 .364.5h2.152c.26 0 .444-.253.364-.5l-.657-2.022a.574.574 0 0 1 .227-.655A1.819 1.819 0 0 0 12 8.745Zm-2.968 1.819A2.968 2.968 0 1 1 14 12.758l.533 1.64a1.532 1.532 0 0 1-1.457 2.006h-2.15a1.532 1.532 0 0 1-1.457-2.006l.533-1.64a2.96 2.96 0 0 1-.969-2.194Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgLockCircleBold;
