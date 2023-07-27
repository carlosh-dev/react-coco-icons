import * as React from "react";
const SvgTv = ({ title, titleId, ...props }) => (
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
      d="M15.35 3 12 6.176 8.65 3m.017 16.412L7.556 21m7.778-1.588L16.445 21M4.808 15.41a9.116 9.116 0 0 1 0-4.702c.527-1.975 2.18-3.497 4.271-3.928l.492-.102c1.6-.33 3.257-.33 4.858 0l.492.102c2.09.431 3.744 1.953 4.27 3.928a9.114 9.114 0 0 1 0 4.701c-.526 1.976-2.18 3.497-4.27 3.929l-.492.102c-1.6.33-3.257.33-4.858 0l-.492-.102c-2.09-.432-3.744-1.953-4.27-3.929Z"
    />
  </svg>
);
export default SvgTv;
