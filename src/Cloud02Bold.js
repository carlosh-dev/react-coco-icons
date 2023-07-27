import * as React from "react";
const SvgCloud02Bold = ({ title, titleId, ...props }) => (
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
      d="M8.382 5c1.67 0 3.1.951 3.82 2.325a7.096 7.096 0 0 1 2.899-.614c3.8 0 6.899 2.965 6.899 6.645C22 17.036 18.9 20 15.1 20H7.04C4.267 20 2 17.837 2 15.145c0-1.751.96-3.28 2.392-4.133a4.376 4.376 0 0 1-.325-1.659C4.067 6.973 5.975 5 8.382 5Zm-2.92 4.353c0-1.675 1.332-2.99 2.92-2.99 1.131 0 2.13.664 2.613 1.653A6.738 6.738 0 0 0 8.82 10.6a5.209 5.209 0 0 0-1.782-.313c-.473 0-.931.064-1.366.182a3.041 3.041 0 0 1-.21-1.117Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCloud02Bold;
