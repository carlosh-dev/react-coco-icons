import * as React from "react";
const SvgLogoff = ({ title, titleId, ...props }) => (
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
      clipPath="url(#Logoff_svg__a)"
    >
      <path d="M20.5 12H8.59M12 8.05l-3.66 3.67c-.15.15-.15.4 0 .56L12 15.95" />
      <path d="M8.22 3H6.33C4.77 3 3.5 4.27 3.5 5.84v12.32C3.5 19.73 4.77 21 6.33 21h1.89" />
    </g>
    <defs>
      <clipPath id="Logoff_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLogoff;
