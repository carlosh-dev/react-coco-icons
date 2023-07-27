import * as React from "react";
const SvgPlayBold = ({ title, titleId, ...props }) => (
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
      d="M12.125 6.587C9.958 5.337 7.25 6.9 7.25 9.402v5.196c0 2.502 2.708 4.066 4.875 2.815l4.5-2.598c2.167-1.251 2.167-4.379 0-5.63l-4.5-2.598Z"
    />
  </svg>
);
export default SvgPlayBold;
