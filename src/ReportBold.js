import * as React from "react";
const SvgReportBold = ({ title, titleId, ...props }) => (
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
      d="M16.303 15.336H6.68v4.846a.83.83 0 0 1-.84.818.83.83 0 0 1-.84-.818V3.818A.83.83 0 0 1 5.84 3h10.463c1.1 0 1.948.66 2.37 1.482a2.926 2.926 0 0 1-.06 2.798l-.503.878a2.064 2.064 0 0 0 0 2.02l.502.878c.53.924.485 1.977.062 2.798-.423.823-1.27 1.482-2.371 1.482Z"
    />
  </svg>
);
export default SvgReportBold;
