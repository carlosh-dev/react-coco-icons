import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgProtectionOff = ({
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
      clipPath="url(#Protection_-_OFF_svg__a)"
    >
      <path d="m13.49 10.52-2.98 2.93M10.51 10.52l2.98 2.93M12.68 2.17a.979.979 0 0 0-1.35 0C10.03 3.38 7 5.99 3.63 7.42c-.4.17-.65.57-.63 1.01.09 1.51.46 5.01 2.09 7.41 1.88 2.79 5.12 5.06 6.38 5.9.33.22.74.22 1.07 0 1.27-.82 4.45-3.05 6.31-5.8 1.64-2.43 2.04-5.99 2.14-7.51.03-.44-.23-.84-.63-1.01-3.36-1.43-6.39-4.04-7.69-5.25h.01Z" />
    </g>
    <defs>
      <clipPath id="Protection_-_OFF_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgProtectionOff;
