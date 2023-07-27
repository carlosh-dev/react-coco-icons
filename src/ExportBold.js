import * as React from "react";
const SvgExportBold = ({ title, titleId, ...props }) => (
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
      d="M9.364 4.764A11.541 11.541 0 0 1 12 4.46.73.73 0 0 0 12 3a13 13 0 0 0-2.969.344A7.632 7.632 0 0 0 3.344 9.03a13 13 0 0 0 0 5.938 7.632 7.632 0 0 0 5.687 5.688c1.953.457 3.985.457 5.938 0a7.632 7.632 0 0 0 5.688-5.688c.229-.976.343-1.973.343-2.969a.73.73 0 1 0-1.46 0c0 .884-.101 1.769-.304 2.636a6.173 6.173 0 0 1-4.6 4.6 11.543 11.543 0 0 1-5.272 0 6.173 6.173 0 0 1-4.6-4.6 11.541 11.541 0 0 1 0-5.272 6.173 6.173 0 0 1 4.6-4.6Z"
    />
    <path
      fill="currentColor"
      d="M16.378 3a.73.73 0 0 0 0 1.46h2.13l-4.592 4.592a.73.73 0 0 0 1.032 1.032l4.593-4.593v2.13a.73.73 0 0 0 1.459 0V3.73a.73.73 0 0 0-.73-.73h-3.892Z"
    />
  </svg>
);
export default SvgExportBold;