import * as React from "react";
const SvgCharge = ({ title, titleId, ...props }) => (
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.622 16.44v.85c0 .84-.696 1.52-1.555 1.52m-1.556-2.37v.85c0 .84.697 1.52 1.556 1.52m0 0V21m.415-14.189-2.075 2.534h3.112l-2.075 2.534m-6.156-.284a8.94 8.94 0 0 1 0-4.5c.491-1.89 2.035-3.347 3.986-3.76l.459-.098a10.948 10.948 0 0 1 4.534 0l.46.097c1.95.414 3.494 1.87 3.985 3.761a8.941 8.941 0 0 1 0 4.5c-.491 1.89-2.035 3.347-3.986 3.76l-.459.098c-1.494.316-3.04.316-4.534 0l-.46-.098c-1.95-.413-3.494-1.87-3.985-3.76Z"
    />
  </svg>
);
export default SvgCharge;
