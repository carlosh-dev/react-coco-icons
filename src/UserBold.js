import * as React from "react";
const SvgUserBold = ({ title, titleId, ...props }) => (
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
      d="M12 3C9.566 3 7.593 4.957 7.593 7.371c0 2.415 1.973 4.372 4.407 4.372s4.407-1.957 4.407-4.372C16.407 4.957 14.434 3 12 3ZM14.601 13.688a16.635 16.635 0 0 0-5.202 0l-.185.029C6.786 14.1 5 16.178 5 18.617A2.393 2.393 0 0 0 7.403 21h9.194A2.393 2.393 0 0 0 19 18.617c0-2.439-1.787-4.516-4.214-4.9l-.185-.03Z"
    />
  </svg>
);
export default SvgUserBold;
