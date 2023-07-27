import * as React from "react";
const SvgVideoBold = ({ title, titleId, ...props }) => (
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
      d="M13.482 3.951c2.028.476 3.65 1.964 4.202 3.884l.774-.46C20.435 6.197 23 7.55 23 9.77v4.823c0 2.101-2.322 3.467-4.296 2.528l-1.155-.55c-.652 1.722-2.185 3.036-4.067 3.477a17.152 17.152 0 0 1-7.79.006c-2.1-.492-3.727-2.074-4.198-4.084l-.066-.278a16.135 16.135 0 0 1 0-7.385l.066-.28c.471-2.009 2.098-3.59 4.198-4.083a17.151 17.151 0 0 1 7.79.006Zm4.509 10.897c.322-1.72.35-3.478.084-5.205l1.346-.801c.767-.457 1.762.068 1.762.929v4.823c0 .815-.901 1.345-1.666.98l-1.526-.726Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgVideoBold;
