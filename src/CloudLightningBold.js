import * as React from "react";
const SvgCloudLightningBold = ({ title, titleId, ...props }) => (
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
      d="M12 3.25c-4.066 0-7.46 3.035-7.588 6.922A5.555 5.555 0 0 0 1.25 15.2c0 2.991 2.094 5.55 5.194 5.55a.75.75 0 0 0 0-1.5c-2.131 0-3.694-1.74-3.694-4.05 0-1.77 1.117-3.27 2.666-3.823l.522-.186-.025-.553a5.347 5.347 0 0 1-.005-.238c0-3.074 2.68-5.65 6.092-5.65 3.202 0 5.765 2.273 6.063 5.091l.046.435.4.174a4.587 4.587 0 0 1 2.741 4.217c0 2.62-1.706 4.583-4.114 4.583a.75.75 0 0 0 0 1.5c3.405 0 5.614-2.814 5.614-6.083a6.091 6.091 0 0 0-3.254-5.407C18.912 5.82 15.744 3.25 12 3.25Z"
    />
    <path
      fill="currentColor"
      d="M14.03 16.53a.75.75 0 0 0-1.06-1.06l-3 3a.75.75 0 0 0 .53 1.28h1.19l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0-.53-1.28h-1.19l1.72-1.72Z"
    />
  </svg>
);
export default SvgCloudLightningBold;
