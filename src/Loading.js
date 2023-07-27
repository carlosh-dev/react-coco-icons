import * as React from "react";
const SvgLoading = ({ title, titleId, ...props }) => (
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
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16 8 2.364-2.364M5.636 18.364 8 16m9.657-4H21M3 12h3.343M12 6.343V3m0 18v-3.343M8 8 5.636 5.636m12.728 12.728L16 16"
    />
  </svg>
);
export default SvgLoading;
