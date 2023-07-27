import * as React from "react";
const SvgCameraSlashBold = ({ title, titleId, ...props }) => (
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
      d="M4.182 3.203a.692.692 0 0 0-.98.979l16.616 16.615a.692.692 0 1 0 .98-.979l-1.822-1.821c.58-.632 1.068-1.361 1.32-2.316a10.807 10.807 0 0 0 0-5.516 6.383 6.383 0 0 0-4.599-4.557 3.924 3.924 0 0 0-7.394 0c-.444.109-.858.256-1.26.456L4.182 3.203ZM5.925 8.732a.692.692 0 1 0-1.094-.849 6.376 6.376 0 0 0-1.127 2.282 10.808 10.808 0 0 0 0 5.516 6.382 6.382 0 0 0 4.868 4.62l.404.083c1.994.416 4.054.416 6.048 0l.404-.084a6.384 6.384 0 0 0 1.205-.378.692.692 0 0 0-.544-1.274c-.3.128-.616.228-.944.297l-.403.084a13.432 13.432 0 0 1-5.484 0l-.403-.084a4.998 4.998 0 0 1-3.812-3.617 9.423 9.423 0 0 1 0-4.81 4.99 4.99 0 0 1 .882-1.786Z"
    />
    <path
      fill="currentColor"
      d="M10.45 12.467a.692.692 0 1 0-1.33-.39 3 3 0 0 0 3.72 3.727.692.692 0 0 0-.387-1.33 1.615 1.615 0 0 1-2.003-2.007Z"
    />
  </svg>
);
export default SvgCameraSlashBold;
