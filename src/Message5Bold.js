import * as React from "react";
const SvgMessage5Bold = ({ title, titleId, ...props }) => (
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
      d="M8.81 3.33c2.101-.44 4.279-.44 6.38 0l.44.092c1.813.38 3.39 1.34 4.5 2.67.182.217.12.53-.119.688l-6.637 4.395a2.51 2.51 0 0 1-2.748 0L3.989 6.78c-.24-.159-.3-.471-.12-.688 1.111-1.33 2.688-2.29 4.501-2.67l.44-.092ZM3.325 8.185c-.278-.184-.665-.078-.77.227-.06.17-.112.343-.158.52a12.065 12.065 0 0 0 0 6.137c.724 2.76 3.038 4.893 5.973 5.509l.44.092c2.101.44 4.279.44 6.38 0l.44-.092c2.935-.616 5.249-2.75 5.973-5.51.53-2.014.53-4.121 0-6.137a7.22 7.22 0 0 0-.157-.52c-.106-.304-.493-.41-.77-.226l-6.386 4.228a4.182 4.182 0 0 1-4.58 0L3.325 8.185Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMessage5Bold;
