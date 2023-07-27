import * as React from "react";
const SvgNoteAddBold = ({ title, titleId, ...props }) => (
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
      d="M8.389 3c.38 0 .689.31.689.692v.226l.115-.029a11.967 11.967 0 0 1 5.73.029v-.226A.69.69 0 0 1 15.61 3c.38 0 .69.31.69.692v.74c1.934.962 3.375 2.776 3.875 4.97.432 1.892.432 3.86 0 5.751-.622 2.728-2.697 4.869-5.368 5.513a11.967 11.967 0 0 1-5.615 0c-2.672-.644-4.747-2.785-5.37-5.513a12.935 12.935 0 0 1 0-5.75c.501-2.195 1.942-4.01 3.877-4.97v-.74A.69.69 0 0 1 8.389 3Zm4.162 8.077a.553.553 0 1 0-1.102 0v1.292h-1.287a.553.553 0 0 0-.551.554c0 .306.247.554.551.554h1.287v1.292c0 .306.246.554.551.554a.553.553 0 0 0 .551-.554v-1.292h1.287a.553.553 0 0 0 .551-.554.553.553 0 0 0-.551-.554H12.55v-1.292Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgNoteAddBold;
