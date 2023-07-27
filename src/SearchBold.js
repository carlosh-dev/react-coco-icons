import * as React from "react";
const SvgSearchBold = ({ title, titleId, ...props }) => (
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
      d="M13.803 3.31a11.711 11.711 0 0 0-5.349 0A6.904 6.904 0 0 0 3.31 8.453a11.711 11.711 0 0 0 0 5.35 6.904 6.904 0 0 0 5.145 5.144c1.76.412 3.59.412 5.35 0a6.897 6.897 0 0 0 2.767-1.356l3.196 3.196a.722.722 0 1 0 1.021-1.021l-3.196-3.196a6.897 6.897 0 0 0 1.356-2.768c.412-1.76.412-3.59 0-5.349a6.904 6.904 0 0 0-5.145-5.145Z"
    />
  </svg>
);
export default SvgSearchBold;
