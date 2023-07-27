import * as React from "react";
const SvgSetting2Bold = ({ title, titleId, ...props }) => (
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
      d="M15.164 3c-1.423 0-2.614.99-2.923 2.32H3.818a.818.818 0 1 0 0 1.636h8.501a3.001 3.001 0 0 0 5.69 0h2.173a.818.818 0 1 0 0-1.637h-2.096A3.001 3.001 0 0 0 15.164 3ZM7.527 9c-1.38 0-2.542.932-2.892 2.2l-.838.022a.818.818 0 0 0 .043 1.636l.806-.021a3.001 3.001 0 0 0 5.757.021h9.779a.818.818 0 1 0 0-1.636h-9.757A3.001 3.001 0 0 0 7.527 9ZM15.164 15a3.001 3.001 0 0 0-2.87 2.124H3.817a.818.818 0 1 0 0 1.637h8.443a3.001 3.001 0 0 0 5.805 0h2.116a.818.818 0 0 0 0-1.637h-2.148A3.001 3.001 0 0 0 15.164 15Z"
    />
  </svg>
);
export default SvgSetting2Bold;
