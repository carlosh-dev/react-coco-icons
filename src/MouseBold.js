import * as React from "react";
const SvgMouseBold = ({ title, titleId, ...props }) => (
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
      d="M9.162 3.372a11.011 11.011 0 0 1 5.676 0 6.608 6.608 0 0 1 4.754 5.063l.087.42a15.568 15.568 0 0 1 0 6.29l-.087.42a6.608 6.608 0 0 1-4.754 5.063 11.01 11.01 0 0 1-5.676 0 6.608 6.608 0 0 1-4.754-5.063l-.087-.42a15.57 15.57 0 0 1 0-6.29l.087-.42a6.608 6.608 0 0 1 4.754-5.063Zm3.55 3.828A.716.716 0 0 0 12 6.48a.716.716 0 0 0-.713.72v1.92c0 .398.32.72.713.72a.716.716 0 0 0 .713-.72V7.2Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMouseBold;
