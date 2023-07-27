import * as React from "react";
const SvgMessage4Bold = ({ title, titleId, ...props }) => (
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
      d="M9.317 3.325a8.005 8.005 0 0 0-6.025 5.901 10.413 10.413 0 0 0 .004 4.912 9.63 9.63 0 0 0 5.737 6.635l.125.05a2.454 2.454 0 0 0 3.175-1.333.916.916 0 0 1 .843-.563H14.3c3.056 0 5.715-2.077 6.433-5.025a9.416 9.416 0 0 0 0-4.455l-.094-.386a7.73 7.73 0 0 0-5.818-5.698l-.404-.092a11.03 11.03 0 0 0-4.863 0l-.237.054Zm-.815 5.042a.694.694 0 0 0-.697.69c0 .383.312.692.697.692h6.386c.385 0 .697-.31.697-.691a.694.694 0 0 0-.697-.691H8.502Zm1.161 3.456a.694.694 0 0 0-.697.691c0 .382.312.691.697.691h4.064c.385 0 .697-.31.697-.69a.694.694 0 0 0-.697-.692H9.663Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMessage4Bold;
