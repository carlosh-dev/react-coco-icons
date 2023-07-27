import * as React from "react";
const SvgVolumeLowBold = ({ title, titleId, ...props }) => (
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
      d="M18.398 9.34a.82.82 0 0 1 1.14-.229C20.441 9.717 21 10.807 21 12c0 1.193-.559 2.283-1.462 2.889a.82.82 0 0 1-1.14-.228.828.828 0 0 1 .227-1.146c.408-.273.73-.826.73-1.515 0-.69-.322-1.242-.73-1.515a.828.828 0 0 1-.227-1.146Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M9.754 6.556a.715.715 0 0 1-.51.214h-.682c-.858 0-1.711.145-2.522.429a4.472 4.472 0 0 0-2.936 3.523l-.007.044c-.13.818-.13 1.65 0 2.468l.007.044A4.473 4.473 0 0 0 6.04 16.8a7.638 7.638 0 0 0 2.522.429h.682c.192 0 .375.077.51.214l.5.508c1.929 1.96 5.25 1.033 5.896-1.645.681-2.83.681-5.783 0-8.614-.645-2.678-3.967-3.606-5.896-1.645l-.5.508Z"
    />
  </svg>
);
export default SvgVolumeLowBold;
