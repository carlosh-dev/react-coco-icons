import * as React from "react";
const SvgCupBold = ({ title, titleId, ...props }) => (
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
      d="m17.801 8.632.034.311a3.45 3.45 0 0 1 3.075 2.714l.01.045c.107.501.107 1.02 0 1.52a3.505 3.505 0 0 1-3.427 2.772h-.31l-.084.282-.125.404a5.23 5.23 0 0 1-4.084 3.608c-.275.049-.552.089-.829.12-1.308.152-2.786.139-4.125-.218-1.344-.358-2.606-1.082-3.355-2.392l-.102-.182a9.555 9.555 0 0 1-.753-1.804 16.275 16.275 0 0 1-.616-6.697l.112-.953a5.083 5.083 0 0 1 4.28-4.436 19.77 19.77 0 0 1 5.964 0l.148.023a4.887 4.887 0 0 1 4.115 4.265l.072.618Zm-.265 5.949c.288-1.381.418-2.79.386-4.202.791.152 1.434.763 1.608 1.575l.01.045c.065.305.065.621 0 .927a2.094 2.094 0 0 1-2.004 1.655ZM7.191 10.955c.312 0 .565.253.565.566v.144c0 1.109.136 2.214.404 3.29l.05.196a.565.565 0 0 1-1.096.274l-.049-.197a14.71 14.71 0 0 1-.438-3.563v-.144c0-.313.253-.566.564-.566Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCupBold;