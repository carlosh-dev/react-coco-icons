import * as React from "react";
const SvgEditBold = ({ title, titleId, ...props }) => (
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
      d="M15.54 3c-.91 0-1.782.36-2.425 1L9.072 8.03a14.425 14.425 0 0 0-3.811 6.707l-.195.778a1.105 1.105 0 0 0 1.342 1.337l.781-.194a14.503 14.503 0 0 0 6.732-3.798l4.043-4.029a3.41 3.41 0 0 0 1.004-2.415A3.422 3.422 0 0 0 15.54 3Zm-1.162 4.574c.618.616 1.336.88 1.868.787l.623-.62a1.87 1.87 0 0 0 .55-1.325 1.877 1.877 0 0 0-1.88-1.873c-.498 0-.976.197-1.329.548l-.622.62c-.093.531.17 1.246.79 1.863ZM4 20.229c0-.427.347-.772.774-.772h14.452a.773.773 0 1 1 0 1.543H4.774A.773.773 0 0 1 4 20.229Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgEditBold;
