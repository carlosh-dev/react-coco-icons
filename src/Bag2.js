import * as React from "react";
const SvgBag2 = ({ title, titleId, ...props }) => (
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
      d="M9.2 7 9 7.479a4.13 4.13 0 0 0-.234 2.448 3.139 3.139 0 0 0 2.52 2.445l.111.02c.4.072.809.072 1.208 0l.111-.02a3.14 3.14 0 0 0 2.52-2.445 4.13 4.13 0 0 0-.234-2.448l-.2-.479"
    />
    <path
      stroke="currentColor"
      strokeWidth={1.5}
      d="M20.22 15.143a6.783 6.783 0 0 1-5.017 5.082 13.64 13.64 0 0 1-6.405 0 6.784 6.784 0 0 1-5.019-5.082c-.509-2.24-.385-4.578.358-6.752l.11-.323a7.005 7.005 0 0 1 5.347-4.62l.68-.127a9.43 9.43 0 0 1 3.452 0l.68.127a7.005 7.005 0 0 1 5.347 4.62l.11.323c.744 2.174.867 4.512.358 6.752Z"
    />
  </svg>
);
export default SvgBag2;
