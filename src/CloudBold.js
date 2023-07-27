import * as React from "react";
const SvgCloudBold = ({ title, titleId, ...props }) => (
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
      d="M12 4c-3.747 0-6.923 2.726-7.079 6.28A5.107 5.107 0 0 0 2 14.89C2 17.723 4.313 20 7.142 20h9.23C19.47 20 22 17.508 22 14.409a5.586 5.586 0 0 0-3.014-4.953C18.414 6.31 15.454 4 12 4Z"
    />
  </svg>
);
export default SvgCloudBold;
