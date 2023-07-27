import * as React from "react";
const SvgEdit = ({ title, titleId, ...props }) => (
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
      d="M16.5 9.136c-1.818.606-4.242-1.818-3.636-3.636m.747-.747L9.694 8.67a13.287 13.287 0 0 0-3.495 6.172l-.19.758a.322.322 0 0 0 .391.39l.758-.19a13.286 13.286 0 0 0 6.172-3.494l3.917-3.917a2.571 2.571 0 1 0-3.636-3.636Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19 20H5"
    />
  </svg>
);
export default SvgEdit;
