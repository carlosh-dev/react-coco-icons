import * as React from "react";
const SvgHeadphoneSlash = ({ title, titleId, ...props }) => (
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
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M22 17.02v-3.978l-.024-.364A10.553 10.553 0 0 0 20.5 7.95m-4.91 9.851a7.232 7.232 0 0 1 0-2.697c.272-1.432 1.308-2.586 2.68-2.983l.291-.084a3.34 3.34 0 0 1 .93-.132c1.386 0 2.51 1.15 2.51 2.568v3.959C22 19.85 20.876 21 19.49 21a3.34 3.34 0 0 1-.93-.132l-.291-.084c-1.372-.397-2.408-1.55-2.68-2.983ZM2 17.02v-3.978l.024-.364c.314-4.68 3.648-8.566 8.142-9.491a9.093 9.093 0 0 1 3.668 0 10.051 10.051 0 0 1 4.436 2.148l.197.198M22 2l-3.533 3.533M2 22l1.5-1.5m4.91-4.91v0c0-.324-.02-.65-.12-.957a3.82 3.82 0 0 0-2.56-2.512l-.29-.084a3.344 3.344 0 0 0-.93-.132c-1.386 0-2.51 1.15-2.51 2.568v3.96c0 .847.402 1.6 1.022 2.067H3.5m4.91-4.91L3.5 20.5m4.91-4.91L18.467 5.533"
    />
  </svg>
);
export default SvgHeadphoneSlash;
