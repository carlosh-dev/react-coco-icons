import * as React from "react";
const SvgPlayCircle = ({ title, titleId, ...props }) => (
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
      strokeWidth={1.5}
      d="M3.688 9.068a7.22 7.22 0 0 1 5.38-5.38 12.837 12.837 0 0 1 5.864 0 7.22 7.22 0 0 1 5.38 5.38 12.839 12.839 0 0 1 0 5.864 7.22 7.22 0 0 1-5.38 5.38 12.839 12.839 0 0 1-5.864 0 7.22 7.22 0 0 1-5.38-5.38 12.837 12.837 0 0 1 0-5.864Z"
    />
    <path
      stroke="currentColor"
      strokeWidth={1.5}
      d="M14.162 10.87c.784.503.784 1.757 0 2.26l-2.647 1.693c-.785.502-1.765-.125-1.765-1.129v-3.388c0-1.004.98-1.631 1.765-1.13l2.647 1.695Z"
    />
  </svg>
);
export default SvgPlayCircle;
