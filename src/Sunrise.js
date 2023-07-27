import * as React from "react";
const SvgSunrise = ({ title, titleId, ...props }) => (
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
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M3.5 15.143h17M7.143 19h9.714m-9.714-3.857C7.143 12.303 9.317 10 12 10c2.682 0 4.857 2.303 4.857 5.143H7.143Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 6V5m4.5 2.062L15.562 8M8.438 8 7.5 7.062"
    />
  </svg>
);
export default SvgSunrise;
