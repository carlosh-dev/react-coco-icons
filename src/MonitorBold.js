import * as React from "react";
const SvgMonitorBold = ({ title, titleId, ...props }) => (
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
      d="M16.312 3.43a21.788 21.788 0 0 0-8.624 0c-1.783.36-3.218 1.726-3.71 3.532l-.043.154c-.58 2.128-.58 4.38 0 6.508l.042.154c.493 1.805 1.928 3.17 3.711 3.53 1.198.242 2.41.383 3.625.42v1.855H9.711a.698.698 0 0 0-.686.708c0 .392.307.709.686.709h4.578c.379 0 .686-.317.686-.709a.698.698 0 0 0-.686-.708h-1.602v-1.854a21.794 21.794 0 0 0 3.625-.42c1.783-.36 3.218-1.726 3.71-3.531l.043-.154c.58-2.128.58-4.38 0-6.508l-.042-.154c-.492-1.806-1.928-3.171-3.711-3.531Z"
    />
  </svg>
);
export default SvgMonitorBold;
