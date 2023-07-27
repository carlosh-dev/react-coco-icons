import * as React from "react";
const SvgQuestionBold = ({ title, titleId, ...props }) => (
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
      d="M3.344 9.03a13.006 13.006 0 0 0 0 5.94 7.63 7.63 0 0 0 5.686 5.686c1.953.459 3.987.459 5.94 0a7.63 7.63 0 0 0 5.686-5.686 13.005 13.005 0 0 0 0-5.94 7.63 7.63 0 0 0-5.686-5.686 13.007 13.007 0 0 0-5.94 0A7.63 7.63 0 0 0 3.344 9.03Zm9.422 6.177a.718.718 0 1 1-1.436 0 .718.718 0 0 1 1.436 0ZM10.66 9.99a1.34 1.34 0 1 1 2.68 0v.116c0 .386-.153.757-.426 1.03l-1.32 1.32a.574.574 0 0 0 .812.812l1.32-1.32a2.605 2.605 0 0 0 .763-1.842V9.99a2.489 2.489 0 1 0-4.978 0v.478a.574.574 0 0 0 1.149 0V9.99Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgQuestionBold;
