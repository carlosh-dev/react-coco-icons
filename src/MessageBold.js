import * as React from "react";
const SvgMessageBold = ({ title, titleId, ...props }) => (
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
      d="M8.43 3.442a7.353 7.353 0 0 0-5.545 5.407 13.077 13.077 0 0 0 0 6.302 7.353 7.353 0 0 0 5.546 5.407l.453.101c2.053.455 4.18.455 6.232 0l.453-.1a7.353 7.353 0 0 0 5.546-5.408c.514-2.07.514-4.233 0-6.302a7.353 7.353 0 0 0-5.546-5.407l-.453-.101a14.401 14.401 0 0 0-6.232 0l-.453.1Zm.105 6.371a.66.66 0 1 0-.767 1.074l2.57 1.837c.994.71 2.33.71 3.324 0l2.57-1.837a.66.66 0 0 0-.767-1.074l-2.57 1.837a1.54 1.54 0 0 1-1.79 0l-2.57-1.837Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMessageBold;
