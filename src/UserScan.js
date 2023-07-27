import * as React from "react";
const SvgUserScan = ({ title, titleId, ...props }) => (
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
      stroke="currentColor"
      strokeWidth={1.5}
      d="M8.5 15.74c0-.982.709-1.82 1.672-1.975a11.507 11.507 0 0 1 3.656 0A1.996 1.996 0 0 1 15.5 15.74v.218c0 .575-.462 1.041-1.033 1.041H9.533c-.57 0-1.033-.466-1.033-1.041v-.218ZM14.042 9.059A2.05 2.05 0 0 1 12 11.118a2.05 2.05 0 0 1-2.042-2.06A2.05 2.05 0 0 1 12 7a2.05 2.05 0 0 1 2.042 2.059Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M21 7c0-2.21-2.239-4-5-4M3 16c0 2.761 1.79 5 4 5M7 3a4 4 0 0 0-4 4m13 14a5 5 0 0 0 5-5"
    />
  </svg>
);
export default SvgUserScan;
