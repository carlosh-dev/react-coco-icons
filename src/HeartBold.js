import * as React from "react";
const SvgHeartBold = ({ title, titleId, ...props }) => (
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
      d="M15.47 4.053c-1.272.176-2.547.778-3.47 1.756-.923-.978-2.198-1.58-3.47-1.756-1.617-.222-3.38.231-4.471 1.678-1.412 1.872-1.412 4.523 0 6.395l4.694 6.224c1.66 2.2 4.835 2.2 6.494 0l4.694-6.224c1.412-1.872 1.412-4.523 0-6.395-1.09-1.447-2.854-1.9-4.47-1.678Z"
    />
  </svg>
);
export default SvgHeartBold;
