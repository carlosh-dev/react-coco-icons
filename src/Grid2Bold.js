import * as React from "react";
const SvgGrid2Bold = ({ title, titleId, ...props }) => (
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
      d="M9.03 3.344a13.006 13.006 0 0 1 5.94 0 7.63 7.63 0 0 1 5.558 5.21H3.472a7.63 7.63 0 0 1 5.558-5.21ZM3.205 9.702a13.007 13.007 0 0 0 .139 5.268 7.63 7.63 0 0 0 5.21 5.558V9.702h-5.35ZM9.703 20.796c1.744.313 3.537.266 5.267-.14a7.63 7.63 0 0 0 5.686-5.686c.406-1.73.453-3.523.14-5.268H9.703v11.094Z"
    />
  </svg>
);
export default SvgGrid2Bold;
