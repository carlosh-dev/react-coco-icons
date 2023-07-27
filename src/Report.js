import * as React from "react";
const SvgReport = ({ title, titleId, ...props }) => (
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6 14.462h10.19c1.417 0 2.282-1.688 1.536-2.995l-.49-.858a2.808 2.808 0 0 1 0-2.756l.49-.858C18.472 5.688 17.606 4 16.191 4H6v10.462Zm0 0V20"
    />
  </svg>
);
export default SvgReport;
