import * as React from "react";
const SvgScan2Bold = ({ title, titleId, ...props }) => (
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
      d="M20.229 13.19c.426 0 .771.345.771.771 0 3.24-2.347 6.005-5.579 6.653l-.512.103a14.545 14.545 0 0 1-5.664.01l-.66-.13C5.353 19.96 3 17.199 3 13.96a.771.771 0 1 1 1.543 0c0 2.467 1.797 4.622 4.34 5.122l.66.13c1.67.329 3.393.325 5.063-.01l.512-.102c2.544-.51 4.34-2.67 4.34-5.14 0-.426.345-.771.77-.771ZM14.457 4.787a13.003 13.003 0 0 0-5.063.01l-.512.102c-2.544.51-4.34 2.67-4.34 5.14a.771.771 0 1 1-1.542 0c0-3.24 2.347-6.005 5.578-6.653l.513-.103a14.546 14.546 0 0 1 5.664-.01l.66.13C18.647 4.04 21 6.801 21 10.04a.771.771 0 1 1-1.543 0c0-2.467-1.797-4.622-4.34-5.122l-.66-.13Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M15.446 12.989a8.486 8.486 0 0 0-6.892 0l-.87.386a.771.771 0 0 1-.626-1.41l.869-.386a10.03 10.03 0 0 1 8.146 0l.869.386a.771.771 0 0 1-.627 1.41l-.869-.386Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgScan2Bold;
