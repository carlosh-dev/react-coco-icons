import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCoins = ({
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
      clipPath="url(#Coins_svg__a)"
    >
      <path d="M12.14 11.61c4.62-.81 8.04-3.34 7.63-5.65-.41-2.31-4.49-3.52-9.11-2.71-4.62.81-8.04 3.34-7.63 5.65.41 2.31 4.48 3.52 9.11 2.71Z" />
      <path d="M4.22 10.61c-.15 1.12.6 2.3 1.89 3.28 1.7 1.18 3.64 1.96 5.68 2.28 3.56.62 6.79.05 8.28-1.29.43-.36.72-.86.83-1.41.24-1.43-.96-2.94-3.02-4.07" />
      <path d="M20.14 14.87c.26.24.47.53.62.86.15.32.23.68.24 1.03C21 19.1 17.21 21 12.47 21c-4.74 0-8.53-1.89-8.53-4.24 0-1.09.82-2.08 2.17-2.83" />
    </g>
    <defs>
      <clipPath id="Coins_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCoins;
