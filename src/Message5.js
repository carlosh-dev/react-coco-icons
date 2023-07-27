import * as React from "react";
const SvgMessage5 = ({ title, titleId, ...props }) => (
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
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m4.302 6.5 5.78 4.13c1.147.82 2.688.82 3.835 0l5.78-4.13M2.886 15.151a13.077 13.077 0 0 1 0-6.302 7.353 7.353 0 0 1 5.546-5.407l.453-.101a14.401 14.401 0 0 1 6.232 0l.453.1a7.353 7.353 0 0 1 5.546 5.408c.514 2.07.514 4.233 0 6.302a7.353 7.353 0 0 1-5.546 5.407l-.453.101a14.402 14.402 0 0 1-6.232 0l-.453-.1a7.353 7.353 0 0 1-5.546-5.408Z"
    />
  </svg>
);
export default SvgMessage5;
