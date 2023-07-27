import * as React from "react";
const SvgLocationBold = ({ title, titleId, ...props }) => (
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
      d="M12 3c-4.432 0-8 3.703-8 8.239 0 2.252.878 4.664 2.283 6.518C7.685 19.607 9.694 21 12 21c2.306 0 4.315-1.393 5.716-3.243C19.122 15.903 20 13.491 20 11.239 20 6.703 16.432 3 12 3Zm-2.834 7.615c0-1.58 1.269-2.861 2.834-2.861 1.565 0 2.834 1.281 2.834 2.861 0 1.58-1.269 2.862-2.834 2.862-1.565 0-2.834-1.281-2.834-2.862ZM12 8.862c-.96 0-1.737.785-1.737 1.753 0 .969.778 1.754 1.737 1.754.96 0 1.737-.785 1.737-1.754 0-.968-.778-1.753-1.737-1.753Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgLocationBold;
