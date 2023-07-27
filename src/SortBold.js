import * as React from "react";
const SvgSortBold = ({ title, titleId, ...props }) => (
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
      d="M2 4.174C2 3.526 2.497 3 3.111 3H20.89C21.503 3 22 3.526 22 4.174c0 .648-.497 1.174-1.111 1.174H3.11C2.497 5.348 2 4.822 2 4.174ZM4.963 12c0-.648.497-1.174 1.111-1.174h11.852c.614 0 1.111.526 1.111 1.174 0 .648-.497 1.174-1.111 1.174H6.074c-.614 0-1.111-.526-1.111-1.174ZM9.037 18.652c-.614 0-1.111.526-1.111 1.174 0 .648.497 1.174 1.111 1.174h5.926c.614 0 1.111-.526 1.111-1.174 0-.648-.497-1.174-1.111-1.174H9.037Z"
    />
  </svg>
);
export default SvgSortBold;
