import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgEffect = ({
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
      clipPath="url(#Effect_svg__a)"
    >
      <path d="m9.96 5.49 2.07.83c.54.22.54.57 0 .79l-2.07.83-.83 2.08c-.22.52-.57.52-.79 0l-.83-2.08-2.07-.83c-.52-.22-.52-.57 0-.79l2.07-.83.83-2.08c.22-.55.57-.55.79 0l.83 2.08ZM17.52 11.84l2.07.83c.54.22.54.57 0 .79l-2.07.83-.83 2.08c-.22.52-.57.52-.79 0l-.83-2.08-2.07-.83c-.52-.22-.52-.57 0-.79l2.07-.83.83-2.08c.22-.55.57-.55.79 0l.83 2.08ZM8.21 16.78l1.78.71c.47.19.47.49 0 .68l-1.78.71-.71 1.78c-.19.45-.49.45-.68 0l-.71-1.78-1.78-.71c-.44-.19-.44-.49 0-.68l1.78-.71.71-1.78c.19-.47.49-.47.68 0l.71 1.78Z" />
    </g>
    <defs>
      <clipPath id="Effect_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgEffect;
