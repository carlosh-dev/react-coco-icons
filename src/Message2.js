import * as React from "react";
const SvgMessage2 = ({ title, titleId, ...props }) => (
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
      d="M7.926 6.392a6.218 6.218 0 0 0-4.634 4.634c-.39 1.66-.39 3.388 0 5.048a6.218 6.218 0 0 0 4.634 4.634c1.66.39 3.388.39 5.048 0a6.218 6.218 0 0 0 4.634-4.634M7.926 6.392c1.66-.39 3.388-.39 5.048 0a6.218 6.218 0 0 1 4.634 4.634c.39 1.66.39 3.388 0 5.048M7.926 6.392a6.22 6.22 0 0 0-1.145.39 6.218 6.218 0 0 1 4.245-3.49c1.66-.39 3.388-.39 5.048 0a6.218 6.218 0 0 1 4.634 4.634c.39 1.66.39 3.388 0 5.048a6.219 6.219 0 0 1-3.49 4.245 6.22 6.22 0 0 0 .39-1.145"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m7.5 12 1.89 1.26a2 2 0 0 0 2.22 0L13.5 12"
    />
  </svg>
);
export default SvgMessage2;
