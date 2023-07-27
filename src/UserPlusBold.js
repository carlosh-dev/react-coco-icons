import * as React from "react";
const SvgUserPlusBold = ({ title, titleId, ...props }) => (
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
      d="M9.943 3a4.371 4.371 0 1 0 0 8.743 4.371 4.371 0 0 0 0-8.743ZM12.523 13.688a16.366 16.366 0 0 0-5.16 0l-.183.029a4.962 4.962 0 0 0-4.18 4.9A2.383 2.383 0 0 0 5.383 21h9.12a2.383 2.383 0 0 0 2.383-2.383 4.962 4.962 0 0 0-4.18-4.9l-.183-.03Z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M18.171 9.171c.427 0 .772.346.772.772v1.286h1.286a.771.771 0 0 1 0 1.542h-1.286v1.286a.771.771 0 1 1-1.543 0v-1.286h-1.286a.771.771 0 1 1 0-1.542H17.4V9.943c0-.426.345-.772.771-.772Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgUserPlusBold;
