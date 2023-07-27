import * as React from "react";
const SvgNotification2 = ({ title, titleId, ...props }) => (
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
      d="M12 3v1.005M9.01 17.903c1.987.224 3.993.224 5.98 0a3.451 3.451 0 0 1-.09.574l-.082.334a2.867 2.867 0 0 1-2.114 2.106c-.463.11-.945.11-1.408 0a2.867 2.867 0 0 1-2.114-2.106l-.082-.334a3.453 3.453 0 0 1-.09-.574Zm-2.982-9.27a6.303 6.303 0 0 1 4.13-4.33c1.235-.4 2.577-.402 3.81.005a6.145 6.145 0 0 1 4.011 4.28l.584 2.223.467 2.117c.144.651.34 1.322.443 1.981a2.239 2.239 0 0 1-1.76 2.548l-.368.075a26.772 26.772 0 0 1-10.69 0l-.367-.075a2.239 2.239 0 0 1-1.76-2.548c.102-.66.298-1.33.442-1.982l.468-2.116.59-2.178Z"
    />
  </svg>
);
export default SvgNotification2;
