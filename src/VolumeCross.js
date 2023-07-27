import * as React from "react";
const SvgVolumeCross = ({ title, titleId, ...props }) => (
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
      strokeWidth={1.5}
      d="M7.866 7.006h-.738a7.07 7.07 0 0 0-2.436.434c-1.367.502-2.362 1.753-2.59 3.258l-.008.05a8.366 8.366 0 0 0 0 2.504l.008.05c.228 1.505 1.223 2.756 2.59 3.258a7.07 7.07 0 0 0 2.436.434h.738c.445 0 .871.187 1.184.52l.541.577c1.597 1.7 4.347.896 4.88-1.428a20.854 20.854 0 0 0 0-9.326c-.533-2.324-3.283-3.129-4.88-1.428l-.541.577c-.313.333-.74.52-1.184.52Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m22 10-4 4m4 0-4-4"
    />
  </svg>
);
export default SvgVolumeCross;
