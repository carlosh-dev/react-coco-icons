import * as React from "react";
const SvgMouse = ({ title, titleId, ...props }) => (
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
      d="M9.084 20.622a6.43 6.43 0 0 1-4.653-4.907l-.095-.456a15.977 15.977 0 0 1 0-6.518l.095-.456a6.43 6.43 0 0 1 4.653-4.907 11.422 11.422 0 0 1 5.832 0 6.43 6.43 0 0 1 4.653 4.907l.095.456c.448 2.15.448 4.369 0 6.518l-.095.456a6.43 6.43 0 0 1-4.653 4.907c-1.911.504-3.92.504-5.832 0Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M12 7v2"
    />
  </svg>
);
export default SvgMouse;
