import * as React from "react";
const SvgComparison = ({ title, titleId, ...props }) => (
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
      d="M12 3v18m2.71-1.611c2.47-.557 4.397-2.41 4.976-4.783a10.979 10.979 0 0 0 0-5.212c-.579-2.373-2.506-4.226-4.975-4.783M12 4.31c-.91 0-1.82.1-2.71.301-2.47.557-4.397 2.41-4.976 4.783a10.98 10.98 0 0 0 0 5.212c.579 2.373 2.506 4.226 4.975 4.783.892.2 1.801.301 2.711.301"
    />
  </svg>
);
export default SvgComparison;
