import * as React from "react";
const SvgShieldVulnerableBold = ({ title, titleId, ...props }) => (
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
      d="M7.435 4.064a10.327 10.327 0 0 1 9.13 0 6 6 0 0 1 3.311 4.774l.033.322c.111 1.084.12 2.176.028 3.261l-.031.363c-.05.595-.08.938-.137 1.265a7.627 7.627 0 0 1-2.617 4.546c-.254.213-.536.409-1.024.75l-.25.175c-.65.453-1.042.727-1.444.922a5.584 5.584 0 0 1-4.868 0c-.402-.195-.794-.469-1.444-.922l-.25-.175c-.488-.341-.77-.537-1.024-.75a7.627 7.627 0 0 1-2.617-4.546c-.057-.327-.086-.67-.137-1.265l-.03-.363A17.468 17.468 0 0 1 4.09 9.16l.033-.322a6 6 0 0 1 3.31-4.774Zm3.369 5.88a.59.59 0 0 0-.84 0 .604.604 0 0 0 0 .848L11.16 12l-1.196 1.207a.604.604 0 0 0 0 .85.59.59 0 0 0 .84 0L12 12.847l1.196 1.208a.59.59 0 0 0 .84 0 .604.604 0 0 0 0-.848L12.841 12l1.196-1.207a.604.604 0 0 0 0-.849.59.59 0 0 0-.841 0L12 11.151l-1.196-1.207Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgShieldVulnerableBold;
