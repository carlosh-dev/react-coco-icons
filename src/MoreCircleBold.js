import * as React from "react";
const SvgMoreCircleBold = ({ title, titleId, ...props }) => (
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
      d="M9.03 3.344a13.006 13.006 0 0 1 5.94 0 7.63 7.63 0 0 1 5.686 5.686 13.006 13.006 0 0 1 0 5.94 7.63 7.63 0 0 1-5.686 5.686 13.006 13.006 0 0 1-5.94 0 7.63 7.63 0 0 1-5.686-5.686 13.006 13.006 0 0 1 0-5.94A7.63 7.63 0 0 1 9.03 3.344ZM9.18 12a.97.97 0 0 1-.983.957.97.97 0 0 1-.983-.957.97.97 0 0 1 .983-.957.97.97 0 0 1 .984.957Zm3.803 0a.97.97 0 0 1-.983.957.97.97 0 0 1-.984-.957.97.97 0 0 1 .984-.957.97.97 0 0 1 .983.957Zm2.82.957a.97.97 0 0 0 .983-.957.97.97 0 0 0-.983-.957.97.97 0 0 0-.984.957c0 .529.44.957.984.957Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMoreCircleBold;
