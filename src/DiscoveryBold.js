import * as React from "react";
const SvgDiscoveryBold = ({ title, titleId, ...props }) => (
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
      d="M9.03 3.344a13.006 13.006 0 0 1 5.94 0 7.63 7.63 0 0 1 5.686 5.686 13.006 13.006 0 0 1 0 5.94 7.63 7.63 0 0 1-5.686 5.686 13.006 13.006 0 0 1-5.94 0 7.63 7.63 0 0 1-5.686-5.686 13.006 13.006 0 0 1 0-5.94A7.63 7.63 0 0 1 9.03 3.344Zm4.46 6.668a.383.383 0 0 1 .498.498l-.78 1.95a1.34 1.34 0 0 1-.747.747l-1.95.78a.383.383 0 0 1-.499-.497l.78-1.95c.137-.341.407-.611.747-.747l1.951-.78Zm1.564.925c.5-1.25-.74-2.491-1.99-1.991l-1.951.78a2.489 2.489 0 0 0-1.387 1.387l-.78 1.95c-.5 1.25.74 2.491 1.99 1.991l1.951-.78a2.489 2.489 0 0 0 1.387-1.387l.78-1.95Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgDiscoveryBold;
