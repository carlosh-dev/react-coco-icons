import * as React from "react";
const SvgFolderBold = ({ title, titleId, ...props }) => (
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
      d="M3.511 12.995V7.252a4.235 4.235 0 0 1 3.102-4.061A5.26 5.26 0 0 1 8.01 3h.858c1.68 0 3.654 1.311 4.378 3.045a17.7 17.7 0 0 1 2.357.327c2.198.456 3.958 2.152 4.535 4.331.478 1.81.485 3.738.006 5.548a6.03 6.03 0 0 1-4.597 4.368l-.155.032a16.66 16.66 0 0 1-6.784 0l-.155-.032a6.03 6.03 0 0 1-4.597-4.368 10.74 10.74 0 0 1-.344-2.235V13.996a10.94 10.94 0 0 1 0-1Zm11.202-4.847a.63.63 0 0 0-.206 1.242l.043.007a3.081 3.081 0 0 1 2.566 3.043.628.628 0 1 0 1.253 0 4.338 4.338 0 0 0-3.613-4.285l-.043-.007Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgFolderBold;
