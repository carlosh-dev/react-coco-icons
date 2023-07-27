import * as React from "react";
const SvgFolder = ({ title, titleId, ...props }) => (
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
      d="M3.862 10.703a10.891 10.891 0 0 0-.006 5.548 6.03 6.03 0 0 0 4.597 4.368l.155.032a16.66 16.66 0 0 0 6.784 0l.155-.032a6.03 6.03 0 0 0 4.597-4.368c.479-1.81.473-3.738-.006-5.548-.577-2.179-2.337-3.875-4.535-4.331a17.698 17.698 0 0 0-7.206 0m-4.535 4.331C4.44 8.524 6.2 6.828 8.397 6.372m-4.535 4.331c-.198.75-.315 1.52-.35 2.292V7.252a4.235 4.235 0 0 1 3.1-4.061A5.26 5.26 0 0 1 8.01 3h.858c1.68 0 3.654 1.311 4.378 3.045-1.206 0-3.662.08-4.85.327m6.214 2.397.043.007a3.71 3.71 0 0 1 3.09 3.664M3.51 13.996v.018l.001.002v-.02Z"
    />
  </svg>
);
export default SvgFolder;
