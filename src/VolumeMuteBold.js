import * as React from "react";
const SvgVolumeMuteBold = ({ title, titleId, ...props }) => (
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
      d="M11.922 6.556a.742.742 0 0 1-.523.214h-.698c-.88 0-1.755.145-2.586.429-1.588.542-2.743 1.896-3.008 3.523l-.007.044a7.684 7.684 0 0 0 0 2.468l.007.044c.265 1.627 1.42 2.98 3.008 3.523a8.003 8.003 0 0 0 2.585.429h.7c.196 0 .384.077.522.214l.512.508c1.977 1.96 5.381 1.033 6.042-1.645.699-2.83.699-5.783 0-8.614-.66-2.678-4.065-3.606-6.041-1.645l-.513.508Z"
    />
  </svg>
);
export default SvgVolumeMuteBold;
