import * as React from "react";
const SvgCard1 = ({ title, titleId, ...props }) => (
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
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4 10.09h16"
    />
    <rect
      width={16.5}
      height={12.5}
      x={3.75}
      y={5.75}
      stroke="currentColor"
      strokeWidth={1.5}
      rx={3.25}
    />
  </svg>
);
export default SvgCard1;
