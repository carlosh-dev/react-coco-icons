import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHeadset = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
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
    <g
      stroke="#000"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      clipPath="url(#Headset_svg__a)"
    >
      <path d="M6.1 16.99H4.8c-.99 0-1.8-.81-1.8-1.8v-3.3c0-.49.41-.9.9-.9h2.2c.5 0 .9.41.9.9v4.2c0 .5-.4.9-.9.9v0Z" />
      <path d="M5 11V9.99c0-3.87 3.13-7 7-7s7 3.13 7 7v1M13 21h1a5 5 0 0 0 4.9-4.01" />
      <path d="M19.15 16.99H17.9c-.5 0-.9-.41-.9-.9v-4.2c0-.49.41-.9.9-.9h2.2c.5 0 .9.41.9.9v3.25c0 1.02-.83 1.85-1.85 1.85Z" />
    </g>
    <defs>
      <clipPath id="Headset_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHeadset;
