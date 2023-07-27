import * as React from "react";
const SvgCpuBold = ({ title, titleId, ...props }) => (
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
      d="M9.097 3c.48 0 .87.39.87.871v1.905c.384-.088.772-.15 1.162-.187V3.87a.871.871 0 0 1 1.742 0v1.718c.39.037.777.1 1.161.187V3.87a.87.87 0 1 1 1.742 0v2.623c.7.44 1.292 1.032 1.732 1.732h2.623a.87.87 0 1 1 0 1.742h-1.905c.087.383.15.771.187 1.161h1.718a.871.871 0 1 1 0 1.742h-1.718c-.037.39-.1.778-.187 1.161h1.905a.87.87 0 1 1 0 1.742h-2.623a5.534 5.534 0 0 1-1.732 1.732v2.623a.87.87 0 1 1-1.742 0v-1.905c-.383.087-.771.15-1.161.187v1.718a.871.871 0 1 1-1.742 0v-1.718c-.39-.037-.778-.1-1.161-.187v1.905a.87.87 0 1 1-1.742 0v-2.623a5.534 5.534 0 0 1-1.732-1.732H3.87a.871.871 0 0 1 0-1.742h1.905a9.155 9.155 0 0 1-.187-1.161H3.87a.871.871 0 0 1 0-1.742h1.718c.037-.39.1-.778.187-1.161H3.87a.871.871 0 1 1 0-1.742h2.623a5.534 5.534 0 0 1 1.732-1.732V3.87c0-.481.39-.871.87-.871Zm2.306 7.533a2.618 2.618 0 0 1 1.194 0c.432.101.769.438.87.87.092.393.092.801 0 1.194a1.167 1.167 0 0 1-.87.87 2.618 2.618 0 0 1-1.194 0 1.167 1.167 0 0 1-.87-.87 2.615 2.615 0 0 1 0-1.194c.101-.432.438-.769.87-.87Zm1.513-1.356a4.01 4.01 0 0 0-1.832 0 2.56 2.56 0 0 0-1.908 1.907 4.01 4.01 0 0 0 0 1.832 2.56 2.56 0 0 0 1.908 1.907c.603.142 1.23.142 1.832 0a2.56 2.56 0 0 0 1.907-1.907 4.011 4.011 0 0 0 0-1.832 2.56 2.56 0 0 0-1.907-1.907Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCpuBold;