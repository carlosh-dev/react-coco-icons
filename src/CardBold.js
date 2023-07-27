import * as React from "react";
const SvgCardBold = ({ title, titleId, ...props }) => (
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
      d="M15.53 3.33a14.07 14.07 0 0 0-6.06 0l-.418.092a7.518 7.518 0 0 0-5.19 4.144c-.147.313.094.656.44.656h16.396c.346 0 .587-.343.44-.656a7.518 7.518 0 0 0-5.19-4.144l-.417-.092ZM3.378 15.07a12.68 12.68 0 0 1-.24-4.924.487.487 0 0 1 .485-.412h17.756c.242 0 .45.173.485.412.243 1.637.163 3.31-.24 4.924a7.509 7.509 0 0 1-5.675 5.509l-.417.092a14.07 14.07 0 0 1-6.062 0l-.417-.092a7.51 7.51 0 0 1-5.675-5.51Zm4.064-3.825a.757.757 0 0 0-.759.756c0 .417.34.756.759.756h4.047c.42 0 .76-.339.76-.756a.757.757 0 0 0-.76-.756H7.441Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCardBold;
