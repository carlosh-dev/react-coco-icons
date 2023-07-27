import * as React from "react";
const SvgCopy = ({ title, titleId, ...props }) => (
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
      strokeWidth={1.5}
      d="M7.426 12.268a10.271 10.271 0 0 1 0-4.691 5.778 5.778 0 0 1 4.306-4.306 10.272 10.272 0 0 1 4.691 0 5.778 5.778 0 0 1 4.306 4.306 10.271 10.271 0 0 1 0 4.691 5.778 5.778 0 0 1-4.306 4.306 10.271 10.271 0 0 1-4.691 0m-4.306-4.306a5.778 5.778 0 0 0 4.306 4.306m-4.306-4.306a10.271 10.271 0 0 1-.253-2.957 8.779 8.779 0 0 0-.25.054 4.952 4.952 0 0 0-3.69 3.69 8.804 8.804 0 0 0 0 4.022 4.952 4.952 0 0 0 3.69 3.69c1.322.31 2.699.31 4.021 0a4.952 4.952 0 0 0 3.69-3.69c.02-.083.038-.167.055-.25a10.27 10.27 0 0 1-2.957-.253"
    />
  </svg>
);
export default SvgCopy;
