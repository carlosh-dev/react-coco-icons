import * as React from "react";
const SvgRotateLeftBold = ({ title, titleId, ...props }) => (
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
      d="M3.692 3c.383 0 .693.31.693.692v2.88c.271-.277.586-.57.946-.865C6.802 4.5 9.029 3.282 12 3.282c4.988 0 9 3.956 9 8.859C21 17.045 16.96 21 12 21s-9-3.955-9-8.86a.692.692 0 0 1 1.385 0c0 4.118 3.398 7.475 7.615 7.475 4.217 0 7.615-3.357 7.615-7.474 0-4.119-3.372-7.475-7.615-7.475-2.567 0-4.494 1.049-5.792 2.112-.44.361-.806.722-1.097 1.04h2.878a.692.692 0 0 1 0 1.385H3.692A.692.692 0 0 1 3 8.511V3.692C3 3.31 3.31 3 3.692 3Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgRotateLeftBold;
