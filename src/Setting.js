import * as React from "react";
const SvgSetting = ({ title, titleId, ...props }) => (
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
      d="M18.48 18.537H21M4.68 12 3 12.044M4.68 12a2.4 2.4 0 1 0 4.8 0 2.4 2.4 0 0 0-4.8 0Zm5.489.044H21m-8.199-6.493H3m18 0h-2.52M3 18.537h9.801m5.079.063a2.4 2.4 0 1 1-4.8 0 2.4 2.4 0 0 1 4.8 0Zm0-13.2a2.4 2.4 0 1 1-4.8 0 2.4 2.4 0 0 1 4.8 0Z"
    />
  </svg>
);
export default SvgSetting;
