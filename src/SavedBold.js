import * as React from "react";
const SvgSavedBold = ({ title, titleId, ...props }) => (
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
      d="M15.03 3.303a15.325 15.325 0 0 0-6.06 0C6.661 3.768 5 5.823 5 8.209v10.42c0 1.829 1.957 2.967 3.512 2.043l2.833-1.683a1.28 1.28 0 0 1 1.31 0l2.833 1.683c1.555.924 3.512-.214 3.512-2.043V8.21c0-2.387-1.662-4.44-3.97-4.906Z"
    />
  </svg>
);
export default SvgSavedBold;
