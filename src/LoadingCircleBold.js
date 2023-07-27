import * as React from "react";
const SvgLoadingCircleBold = ({ title, titleId, ...props }) => (
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
      d="M14.97 3.344a13.006 13.006 0 0 0-5.94 0A7.63 7.63 0 0 0 3.344 9.03a13.006 13.006 0 0 0 0 5.94 7.63 7.63 0 0 0 5.686 5.686c1.953.459 3.987.459 5.94 0a7.63 7.63 0 0 0 5.686-5.686 13.006 13.006 0 0 0 0-5.94 7.63 7.63 0 0 0-5.686-5.686ZM12 7.57a.6.6 0 0 1 .6.6v1.422a.6.6 0 1 1-1.2 0V8.171a.6.6 0 0 1 .6-.6Zm3.836 2.214a.6.6 0 0 1-.22.82l-1.232.711a.6.6 0 1 1-.6-1.039l1.232-.711a.6.6 0 0 1 .82.22Zm-7.672 0a.6.6 0 0 1 .82-.22l1.232.712a.6.6 0 0 1-.6 1.04l-1.232-.712a.6.6 0 0 1-.22-.82Zm2.271 3.118a.6.6 0 0 1-.22.82l-1.231.711a.6.6 0 0 1-.6-1.039l1.232-.711a.6.6 0 0 1 .82.22Zm3.13 0a.6.6 0 0 1 .82-.22l1.231.712a.6.6 0 1 1-.6 1.04l-1.232-.712a.6.6 0 0 1-.22-.82ZM12 13.807a.6.6 0 0 1 .6.6v1.422a.6.6 0 1 1-1.2 0v-1.422a.6.6 0 0 1 .6-.6Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgLoadingCircleBold;
