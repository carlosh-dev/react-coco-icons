import * as React from "react";
const SvgLockBold = ({ title, titleId, ...props }) => (
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
      d="M11.137 4.514a3.513 3.513 0 0 1 1.726 0c1.319.334 2.263 1.446 2.368 2.752l-.04-.008a15.82 15.82 0 0 0-6.383 0l-.039.008c.105-1.306 1.049-2.418 2.368-2.752Zm5.548 2.994v.21a5.483 5.483 0 0 1 3.013 3.55 8.906 8.906 0 0 1-.342 5.622l-.084.21c-.772 1.922-2.53 3.305-4.622 3.637l-.681.108a12.578 12.578 0 0 1-3.938 0l-.68-.108C7.256 20.405 5.5 19.023 4.727 17.1l-.084-.21a8.906 8.906 0 0 1-.342-5.623 5.483 5.483 0 0 1 3.013-3.549v-.21c0-2.048 1.421-3.839 3.458-4.355a4.996 4.996 0 0 1 2.454 0c2.036.516 3.458 2.307 3.458 4.355ZM12 12.85a.57.57 0 0 1 .578.563v1.875a.57.57 0 0 1-.578.563.57.57 0 0 1-.578-.563v-1.875A.57.57 0 0 1 12 12.85Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgLockBold;