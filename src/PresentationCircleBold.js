import * as React from "react";
const SvgPresentationCircleBold = ({ title, titleId, ...props }) => (
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
      d="M7.872 3.485c-2.65.559-4.76 2.586-5.451 5.234-.561 2.15-.561 4.411 0 6.562.69 2.649 2.8 4.675 5.451 5.234l.507.107c2.388.504 4.854.504 7.242 0l.507-.107c2.65-.559 4.76-2.585 5.451-5.234.561-2.15.561-4.411 0-6.562-.69-2.648-2.8-4.675-5.451-5.234l-.507-.107a17.537 17.537 0 0 0-7.242 0l-.507.107Zm6.64 5.191a.693.693 0 0 0-1.158 0l-3.286 4.988-1.354-2.054a.694.694 0 0 0-.579-.314H6.203a.7.7 0 0 0-.696.704.7.7 0 0 0 .696.704h1.56l1.726 2.62a.693.693 0 0 0 1.157 0l3.286-4.988 1.354 2.054a.693.693 0 0 0 .579.314h1.932a.7.7 0 0 0 .696-.704.7.7 0 0 0-.696-.704h-1.56l-1.726-2.62Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPresentationCircleBold;
