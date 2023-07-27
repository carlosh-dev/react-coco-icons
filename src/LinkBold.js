import * as React from "react";
const SvgLinkBold = ({ title, titleId, ...props }) => (
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
      strokeMiterlimit={10}
      strokeWidth={1.5}
      clipPath="url(#LinkBold_svg__a)"
    >
      <path d="m12.85 17.91-1.66 1.69a4.76 4.76 0 0 1-6.75 0 4.76 4.76 0 0 1 0-6.75l1.68-1.69M11.19 6.09l1.69-1.69a4.79 4.79 0 0 1 6.76 0 4.79 4.79 0 0 1 0 6.76l-1.69 1.69M8.62 15.38l6.76-6.75" />
    </g>
    <defs>
      <clipPath id="LinkBold_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLinkBold;
