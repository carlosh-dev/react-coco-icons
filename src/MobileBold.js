import * as React from "react";
const SvgMobileBold = ({ title, titleId, ...props }) => (
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
      d="M12 15.84c.525 0 .95.43.95.96v.022c0 .53-.425.96-.95.96a.955.955 0 0 1-.95-.96V16.8c0-.53.425-.96.95-.96Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m19.592 8.435.087.42.008.04c.344 1.686.404 3.417.182 5.12l-.081.625h-.014c-.029.169-.06.337-.095.505l-.087.42a6.608 6.608 0 0 1-4.754 5.063 11.01 11.01 0 0 1-5.676 0 6.608 6.608 0 0 1-4.754-5.063l-.087-.42a15.559 15.559 0 0 1-.096-.505h-.013l-.081-.626-.006-.042a15.57 15.57 0 0 1 .196-5.117l.087-.42a6.608 6.608 0 0 1 4.754-5.063 11.011 11.011 0 0 1 5.676 0 6.608 6.608 0 0 1 4.754 5.063Zm-1.308 6.417c.015-.07.028-.141.042-.212H5.674l.042.212.087.419a5.175 5.175 0 0 0 3.722 3.965 9.601 9.601 0 0 0 4.95 0 5.175 5.175 0 0 0 3.722-3.965l.087-.42ZM13.758 7.2a.573.573 0 0 1-.57.576h-2.376a.573.573 0 0 1-.57-.576c0-.318.256-.576.57-.576h2.376c.314 0 .57.258.57.576Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMobileBold;
