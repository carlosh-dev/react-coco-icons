import * as React from "react";
const SvgVolumeSlashBold = ({ title, titleId, ...props }) => (
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
      d="M20.736 3.264a.9.9 0 0 1 0 1.272L8 17.273a.906.906 0 0 1-.089.088l-3.375 3.375a.9.9 0 1 1-1.272-1.272l2.552-2.552a4.88 4.88 0 0 1-2.005-3.22l-.008-.047a8.545 8.545 0 0 1 0-2.69l.008-.048a4.88 4.88 0 0 1 3.213-3.84A8.392 8.392 0 0 1 9.785 6.6h.747c.21 0 .41-.084.558-.233l.547-.554c1.56-1.578 3.94-1.438 5.368-.09l2.459-2.46a.9.9 0 0 1 1.272 0ZM18.539 10.194a.9.9 0 1 0-1.79.19 18.167 18.167 0 0 1-.408 6.187c-.374 1.548-2.303 2.085-3.423.951l-.548-.554a2.584 2.584 0 0 0-1.838-.768.9.9 0 0 0 0 1.8c.21 0 .41.084.558.233l.547.554c2.111 2.137 5.748 1.126 6.454-1.793.54-2.23.689-4.53.448-6.8Z"
    />
  </svg>
);
export default SvgVolumeSlashBold;
