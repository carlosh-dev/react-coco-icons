import * as React from "react";
const SvgEyeSlashBold = ({ title, titleId, ...props }) => (
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
      d="M19.745 5.322 5.86 19.258a.77.77 0 0 1-1.091 0 .776.776 0 0 1 0-1.095l.744-.747a9.425 9.425 0 0 1-1.575-1.995 6.705 6.705 0 0 1 0-6.841C6.823 3.71 13.043 2.733 17.28 5.607l1.374-1.38a.77.77 0 0 1 1.091 0 .776.776 0 0 1 0 1.095Zm-6.66 4.494a2.484 2.484 0 0 0-3.566 2.24c0 .39.09.76.25 1.089l3.317-3.33Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M19.005 8.31a.77.77 0 0 1 1.057.27 6.705 6.705 0 0 1 0 6.84c-2.414 4.075-7.167 5.422-11.125 4.076a.775.775 0 0 1 .495-1.466c3.333 1.133 7.296-.012 9.304-3.4a5.152 5.152 0 0 0 0-5.259.776.776 0 0 1 .269-1.06Z"
    />
    <path
      fill="currentColor"
      d="M15.252 11.28c.426 0 .771.348.771.775A4.03 4.03 0 0 1 12 16.093a.773.773 0 0 1-.77-.775c0-.427.344-.774.77-.774 1.37 0 2.481-1.114 2.481-2.489 0-.427.346-.774.772-.774Z"
    />
  </svg>
);
export default SvgEyeSlashBold;
