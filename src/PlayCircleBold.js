import * as React from "react";
const SvgPlayCircleBold = ({ title, titleId, ...props }) => (
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
      d="M9.03 3.344a13.006 13.006 0 0 1 5.94 0 7.63 7.63 0 0 1 5.686 5.686 13.008 13.008 0 0 1 0 5.94 7.63 7.63 0 0 1-5.686 5.686 13.008 13.008 0 0 1-5.94 0 7.63 7.63 0 0 1-5.686-5.686 13.006 13.006 0 0 1 0-5.94A7.63 7.63 0 0 1 9.03 3.344Zm1.416 7.034c0-.28.133-.477.287-.575a.423.423 0 0 1 .479 0l2.534 1.621c.176.113.287.325.287.576 0 .25-.111.463-.287.576l-2.534 1.621a.423.423 0 0 1-.48 0c-.152-.098-.286-.296-.286-.575v-3.244Zm1.413-1.586a1.622 1.622 0 0 0-1.773 0c-.504.322-.84.905-.84 1.586v3.244c0 .681.336 1.264.84 1.586.51.326 1.185.376 1.773 0l2.534-1.622c.575-.368.84-.996.84-1.586 0-.59-.265-1.218-.84-1.586l-2.534-1.622Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPlayCircleBold;
