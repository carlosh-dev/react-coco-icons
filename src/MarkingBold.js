import * as React from "react";
const SvgMarkingBold = ({ title, titleId, ...props }) => (
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
      d="M12 7.154a.692.692 0 0 1-.692-.692v-2.77a.692.692 0 1 1 1.384 0v2.77c0 .382-.31.692-.692.692ZM12 15.692a3.692 3.692 0 1 0 0-7.384 3.692 3.692 0 0 0 0 7.384ZM16.846 12c0-.382.31-.692.692-.692h2.77a.692.692 0 1 1 0 1.384h-2.77a.692.692 0 0 1-.692-.692ZM3.692 11.308a.692.692 0 1 0 0 1.384h2.77a.692.692 0 1 0 0-1.384h-2.77ZM11.308 20.308a.692.692 0 1 0 1.384 0v-2.77a.692.692 0 1 0-1.384 0v2.77Z"
    />
  </svg>
);
export default SvgMarkingBold;
