import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDumbbell = ({
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
      clipPath="url(#Dumbbell_svg__a)"
    >
      <path d="M18.5 11.51v5.01c-.02.35-.13.69-.3.99-.18.3-.43.56-.73.75L13 20.76c-.32.15-.67.23-1.02.23s-.71-.08-1.03-.23l-4.42-2.5c-.3-.19-.54-.45-.73-.75-.17-.3-.28-.64-.3-.99v-5.01c.02-.35.13-.69.3-.99.18-.3.43-.56.73-.75l1.84-1.02L11 7.27c.32-.15.67-.23 1.03-.23s.7.08 1.02.23l2.63 1.48 1.84 1.02c.29.2.52.46.7.76.17.3.26.64.28.98Z" />
      <path d="m16.62 4.89-.97 3.86-2.63-1.48c-.32-.15-.67-.23-1.03-.23s-.7.08-1.02.23L8.34 8.75l-.97-3.86c-.08-.22-.1-.46-.06-.7.04-.24.14-.45.28-.64.15-.19.34-.34.56-.43.22-.09.47-.14.71-.12h6.32c.24-.01.48.03.69.13.22.1.41.25.55.44.15.19.23.41.27.64.04.23-.02.538-.09.758l.02-.078ZM11.98 16.01c1.11 0 1.99-.89 1.99-1.99s-.89-1.99-1.99-1.99-1.99.89-1.99 1.99.89 1.99 1.99 1.99Z" />
    </g>
    <defs>
      <clipPath id="Dumbbell_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDumbbell;
