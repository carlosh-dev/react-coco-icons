import * as React from "react";
const SvgFilterBold = ({ title, titleId, ...props }) => (
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
      d="M6.532 3.25c-2.404 0-3.672 2.82-2.064 4.59l4.008 4.41c.542.596.843 1.37.843 2.174v3.826c0 1.38 1.13 2.5 2.524 2.5 1.394 0 2.524-1.12 2.524-2.5v-3.756c0-.837.326-1.642.91-2.247l4.198-4.346c1.689-1.75.437-4.651-2.007-4.651H6.532Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgFilterBold;
