import * as React from "react";
const SvgWalletBold = ({ title, titleId, ...props }) => (
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
      d="M15.03 3.33a14.07 14.07 0 0 0-6.06 0l-.418.092a7.509 7.509 0 0 0-5.675 5.51 12.68 12.68 0 0 0 0 6.137 7.51 7.51 0 0 0 5.675 5.509l.417.092c1.997.44 4.066.44 6.062 0l.417-.092a7.509 7.509 0 0 0 5.675-5.51 12.678 12.678 0 0 0 0-6.137 7.509 7.509 0 0 0-5.675-5.509l-.417-.092Zm2.913 6.478a5.332 5.332 0 0 1 1.138-.07c.416.02.743.345.8.756.135 1 .135 2.013 0 3.012a.857.857 0 0 1-.8.755 5.329 5.329 0 0 1-1.138-.069l-.074-.012c-.982-.167-1.74-.83-1.997-1.664a1.748 1.748 0 0 1 0-1.032c.257-.835 1.015-1.497 1.997-1.664l.074-.012Zm-10.597-.83c0-.335.271-.605.607-.605H12c.335 0 .607.27.607.604a.606.606 0 0 1-.607.605H7.953a.606.606 0 0 1-.607-.605Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgWalletBold;
