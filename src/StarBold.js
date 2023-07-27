import * as React from "react";
const SvgStarBold = ({ title, titleId, ...props }) => (
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
      d="M14.857 4.926c-1.067-2.568-4.647-2.568-5.714 0l-.56 1.346c-.222.536-.707.9-1.262.963l-1.56.177c-2.639.299-3.692 3.583-1.795 5.417l1.325 1.281c.392.379.568.94.46 1.486l-.32 1.618c-.531 2.687 2.364 4.784 4.697 3.287l1.046-.672a1.522 1.522 0 0 1 1.652 0l1.046.671c2.333 1.498 5.228-.599 4.697-3.286l-.32-1.618a1.63 1.63 0 0 1 .46-1.486l1.325-1.281c1.897-1.834.844-5.118-1.794-5.417l-1.561-.177a1.564 1.564 0 0 1-1.263-.963l-.559-1.346Z"
    />
  </svg>
);
export default SvgStarBold;
