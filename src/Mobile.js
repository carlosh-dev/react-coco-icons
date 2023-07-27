import * as React from "react";
const SvgMobile = ({ title, titleId, ...props }) => (
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
      strokeWidth={2}
      d="M12 17v.023"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M13.25 7h-2.5M19.3 14.087H4.7m10.216 6.535c-1.911.504-3.92.504-5.832 0a6.43 6.43 0 0 1-4.653-4.907l-.095-.456a15.977 15.977 0 0 1 0-6.518l.095-.456a6.43 6.43 0 0 1 4.653-4.907 11.422 11.422 0 0 1 5.832 0 6.43 6.43 0 0 1 4.653 4.907l.095.456c.448 2.15.448 4.369 0 6.518l-.095.456a6.43 6.43 0 0 1-4.653 4.907Z"
    />
  </svg>
);
export default SvgMobile;
