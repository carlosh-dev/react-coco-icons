import * as React from "react";
const SvgHeadphoneBold = ({ title, titleId, ...props }) => (
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
      d="M10.459 4.713a7.72 7.72 0 0 1 3.082 0c3.406.694 6.026 3.374 6.732 6.74a3.042 3.042 0 0 0-1.359-.319c-.36 0-.72.05-1.067.15l-.269.077a4.29 4.29 0 0 0-3.02 3.325 7.324 7.324 0 0 0 0 2.762 4.29 4.29 0 0 0 3.02 3.325l.269.077c.347.1.706.15 1.067.15C20.618 21 22 19.601 22 17.875v-4.95l-.024-.359c-.314-4.625-3.643-8.466-8.131-9.38a9.24 9.24 0 0 0-3.69 0c-4.488.914-7.817 4.755-8.13 9.38L2 12.925v4.95C2 19.601 3.382 21 5.086 21c.36 0 .72-.05 1.067-.15l.269-.077a4.29 4.29 0 0 0 3.02-3.325 7.325 7.325 0 0 0 0-2.762 4.29 4.29 0 0 0-3.02-3.325l-.269-.077c-.347-.1-.706-.15-1.067-.15-.488 0-.949.114-1.359.318.706-3.365 3.326-6.045 6.732-6.739Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgHeadphoneBold;
