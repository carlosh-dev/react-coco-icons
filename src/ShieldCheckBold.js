import * as React from "react";
const SvgShieldCheckBold = ({ title, titleId, ...props }) => (
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
      d="M16.565 4.064a10.327 10.327 0 0 0-9.13 0 6 6 0 0 0-3.311 4.774l-.033.322a17.468 17.468 0 0 0-.028 3.261l.031.363c.05.595.08.938.137 1.265a7.627 7.627 0 0 0 2.617 4.546c.254.213.536.409 1.023.75l.251.175c.65.453 1.042.727 1.444.922a5.584 5.584 0 0 0 4.868 0c.402-.195.794-.469 1.444-.922l.25-.175c.488-.341.77-.537 1.024-.75a7.627 7.627 0 0 0 2.617-4.546c.057-.327.086-.67.137-1.265l.03-.363a17.472 17.472 0 0 0-.027-3.261l-.033-.322a6 6 0 0 0-3.31-4.774ZM14.97 9.66a.68.68 0 0 1 .033.954l-3.2 3.462a.665.665 0 0 1-.962.017l-1.828-1.846a.68.68 0 0 1 0-.955.664.664 0 0 1 .945 0l1.34 1.352 2.727-2.95a.664.664 0 0 1 .945-.034Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgShieldCheckBold;
