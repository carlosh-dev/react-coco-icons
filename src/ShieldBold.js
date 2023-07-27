import * as React from "react";
const SvgShieldBold = ({ title, titleId, ...props }) => (
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
      d="M16.56 4.064a10.304 10.304 0 0 0-9.12 0A6.016 6.016 0 0 0 4.123 8.85l-.033.32c-.11 1.08-.12 2.17-.027 3.252l.03.363c.051.59.08.932.137 1.26a7.636 7.636 0 0 0 2.617 4.55c.254.213.535.409 1.018.746l.255.178c.642.449 1.035.724 1.438.92a5.597 5.597 0 0 0 4.884 0c.403-.196.796-.471 1.438-.92l.255-.177c.482-.338.763-.534 1.018-.747a7.636 7.636 0 0 0 2.617-4.55c.057-.328.086-.671.136-1.26l.031-.363a17.44 17.44 0 0 0-.027-3.252l-.033-.32a6.016 6.016 0 0 0-3.317-4.787Z"
    />
  </svg>
);
export default SvgShieldBold;
