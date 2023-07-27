import * as React from "react";
const SvgAwardBold = ({ title, titleId, ...props }) => (
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
      d="M18.253 11.637a5.537 5.537 0 0 1-1.746 2.903l.92 3.723c.463 1.872-1.466 3.312-3.088 2.51l-1.732-.857a1.37 1.37 0 0 0-1.214 0l-1.732.857c-1.622.802-3.55-.638-3.088-2.51l.92-3.723a5.538 5.538 0 0 1-1.746-2.903 9.313 9.313 0 0 1 0-4.265 5.54 5.54 0 0 1 4.13-4.127 9.323 9.323 0 0 1 4.247 0 5.54 5.54 0 0 1 4.129 4.127 9.312 9.312 0 0 1 0 4.265Zm-4.13 4.127a5.428 5.428 0 0 0 1.193-.428l.808 3.268a.836.836 0 0 1-1.202.921l-1.733-.857a2.68 2.68 0 0 0-2.378 0l-1.733.857a.836.836 0 0 1-1.202-.921l.808-3.268a5.526 5.526 0 0 0 1.192.428 9.322 9.322 0 0 0 4.248 0Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgAwardBold;
