import * as React from "react";
const SvgVolumeCrossBold = ({ title, titleId, ...props }) => (
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
      d="M8.69 6.556a.705.705 0 0 1-.505.214h-.676c-.85 0-1.695.145-2.498.429a4.462 4.462 0 0 0-2.908 3.523l-.007.044a7.948 7.948 0 0 0 0 2.468l.007.044A4.462 4.462 0 0 0 5.011 16.8a7.5 7.5 0 0 0 2.498.429h.676c.19 0 .371.077.505.214l.495.508c1.91 1.96 5.2 1.033 5.84-1.645.674-2.83.674-5.783 0-8.614-.64-2.678-3.93-3.606-5.84-1.645l-.495.508Z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M21.762 9.765a.834.834 0 0 1 0 1.167L20.709 12l1.053 1.068a.834.834 0 0 1 0 1.168.807.807 0 0 1-1.152 0l-1.053-1.068-1.053 1.068a.807.807 0 0 1-1.152 0 .834.834 0 0 1 0-1.168L18.405 12l-1.053-1.068a.834.834 0 0 1 0-1.167.806.806 0 0 1 1.152 0l1.053 1.067 1.053-1.067a.806.806 0 0 1 1.152 0Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgVolumeCrossBold;
