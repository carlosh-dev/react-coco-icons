import * as React from "react";
const SvgSettingBold = ({ title, titleId, ...props }) => (
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
      d="M10.2 19.2a1.8 1.8 0 0 0 3.6 0v-1.16c.419-.126.82-.293 1.197-.497l.821.821a1.8 1.8 0 0 0 2.546-2.546l-.821-.82c.204-.378.371-.779.496-1.198H19.2a1.8 1.8 0 0 0 0-3.6h-1.16a6.264 6.264 0 0 0-.497-1.197l.821-.821a1.8 1.8 0 0 0-2.546-2.546l-.82.821a6.262 6.262 0 0 0-1.198-.496V4.8a1.8 1.8 0 0 0-3.6 0v1.16c-.419.126-.82.293-1.197.497l-.821-.82a1.8 1.8 0 1 0-2.546 2.545l.821.82a6.262 6.262 0 0 0-.496 1.198H4.8a1.8 1.8 0 0 0 0 3.6h1.16c.126.419.293.82.497 1.197l-.821.821a1.8 1.8 0 0 0 2.546 2.546l.82-.821c.378.204.779.371 1.198.496V19.2Zm1.8-4.5a2.7 2.7 0 1 0 0-5.4 2.7 2.7 0 0 0 0 5.4Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSettingBold;
