import * as React from "react";
const SvgRefresh = ({ title, titleId, ...props }) => (
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
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      clipPath="url(#Refresh_svg__a)"
    >
      <path d="M21.02 12.05c0 2.29-.88 4.58-2.63 6.33a9.023 9.023 0 0 1-12.74 0 9.153 9.153 0 0 1-1.54-2.06M3.02 11.87c.04-2.25.91-4.5 2.63-6.22a9.023 9.023 0 0 1 12.74 0c.63.63 1.13 1.32 1.54 2.06" />
      <path d="M16.48 7.71h3.98V3.73M7.58 16.32H3.6v3.98" />
    </g>
    <defs>
      <clipPath id="Refresh_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRefresh;
