import * as React from "react";
const SvgCameraBold = ({ title, titleId, ...props }) => (
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
      fillRule="evenodd"
      d="M8.155 5.653C8.717 4.107 10.225 3 12 3c1.774 0 3.283 1.107 3.845 2.653 2.33.579 4.166 2.349 4.783 4.635a10.761 10.761 0 0 1 0 5.61c-.642 2.378-2.602 4.197-5.063 4.7l-.42.085a15.749 15.749 0 0 1-6.29 0l-.42-.086c-2.461-.502-4.421-2.32-5.063-4.699a10.76 10.76 0 0 1 0-5.61c.617-2.286 2.454-4.056 4.783-4.635ZM12 10.183c-1.644 0-2.976 1.303-2.976 2.91 0 1.608 1.332 2.911 2.976 2.911s2.976-1.303 2.976-2.91c0-1.608-1.332-2.911-2.976-2.911Zm-1.824 2.91c0-.985.817-1.784 1.824-1.784 1.007 0 1.824.8 1.824 1.784 0 .986-.817 1.784-1.824 1.784-1.007 0-1.824-.798-1.824-1.784Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCameraBold;
