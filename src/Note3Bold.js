import * as React from "react";
const SvgNote3Bold = ({ title, titleId, ...props }) => (
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
      d="M9.062 3.696A.687.687 0 0 0 8.384 3a.687.687 0 0 0-.678.696v.733c-1.934.958-3.379 2.77-3.881 4.97a12.926 12.926 0 0 0 0 5.757c.625 2.735 2.705 4.87 5.37 5.51a11.98 11.98 0 0 0 5.61 0c2.665-.64 4.745-2.776 5.37-5.51a12.926 12.926 0 0 0 0-5.757c-.502-2.2-1.947-4.012-3.88-4.97v-.733A.687.687 0 0 0 15.615 3a.687.687 0 0 0-.678.696v.226a11.979 11.979 0 0 0-5.877 0v-.226Zm-.317 8.582a.55.55 0 0 1 .543-.557h5.424c.3 0 .543.25.543.557a.55.55 0 0 1-.543.556H9.288a.55.55 0 0 1-.543-.556Zm0 2.783a.55.55 0 0 1 .543-.557H12c.3 0 .542.25.542.557a.55.55 0 0 1-.542.556H9.288a.55.55 0 0 1-.543-.556Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgNote3Bold;
