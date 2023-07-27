import * as React from "react";
const SvgPhoneBold = ({ title, titleId, ...props }) => (
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
      d="M7.105 3c-.337 0-.672.051-.994.152l-.247.077c-1.436.448-2.476 1.73-2.746 3.265a7.803 7.803 0 0 0 .02 2.81 14.576 14.576 0 0 0 11.664 11.578 7.805 7.805 0 0 0 2.704 0c1.534-.27 2.817-1.31 3.265-2.746l.077-.247c.1-.322.152-.657.152-.994 0-1.619-1.426-2.818-3.038-2.818h-3.616c-1.613 0-3.038 1.2-3.038 2.818 0 .337.051.672.152.994l.077.247c.026.084.055.167.087.248a13.205 13.205 0 0 1-6.008-6.008c.081.032.164.061.248.087l.247.077c.322.101.657.152.994.152 1.619 0 2.818-1.425 2.818-3.038V6.038C9.923 4.426 8.723 3 7.105 3Z"
    />
  </svg>
);
export default SvgPhoneBold;
