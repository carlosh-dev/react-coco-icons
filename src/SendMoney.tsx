import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSendMoney = ({
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      clipPath="url(#Send-Money_svg__a)"
    >
      <path d="M9.3 15.15H3.19M5.08 17.32l-2.01-2.01c-.08-.08-.08-.22 0-.31l2.01-2.01" />
      <path d="M6.6 21h10.8c1.98 0 3.6-1.62 3.6-3.6V6.6C21 4.62 19.38 3 17.4 3H6.6A3.61 3.61 0 0 0 3 6.6v2.7" />
      <path d="M12.57 11.69c0 .83.64 1.49 1.42 1.49h1.6c.68 0 1.23-.58 1.23-1.3 0-.77-.34-1.05-.84-1.23l-2.56-.89c-.5-.18-.84-.45-.84-1.23 0-.71.55-1.3 1.23-1.3h1.6c.78 0 1.42.66 1.42 1.49M14.7 6.37v7.66" />
    </g>
    <defs>
      <clipPath id="Send-Money_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSendMoney;
