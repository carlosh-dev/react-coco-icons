import * as React from "react";
const SvgNote2Bold = ({ title, titleId, ...props }) => (
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
      d="M8.384 3c.374 0 .678.312.678.696v.226l.133-.034a11.979 11.979 0 0 1 5.743.034v-.226c0-.384.304-.696.678-.696.375 0 .678.312.678.696v.733c1.934.958 3.379 2.77 3.881 4.97a12.926 12.926 0 0 1 0 5.757c-.625 2.734-2.705 4.87-5.37 5.51a11.98 11.98 0 0 1-5.61 0c-2.665-.64-4.745-2.775-5.37-5.51a12.926 12.926 0 0 1 0-5.757c.502-2.2 1.947-4.012 3.88-4.97v-.733c0-.384.304-.696.679-.696ZM12 12.649a.55.55 0 0 0-.543.556.55.55 0 0 0 .543.557h2.712c.3 0 .543-.25.543-.557a.55.55 0 0 0-.543-.556H12Zm-2.712 2.783a.55.55 0 0 0-.543.557.55.55 0 0 0 .543.556h5.424c.3 0 .543-.249.543-.556a.55.55 0 0 0-.543-.557H9.288Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgNote2Bold;
