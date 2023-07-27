import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgWhatsapp = ({
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
    <g clipPath="url(#Whatsapp_svg__a)">
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20.88 13.53c-.61 3.74-3.4 6.6-7.11 7.3-2.04.39-3.97.08-5.64-.7-.28-.14-.72-.19-1.02-.13-.62.15-1.68.41-2.57.61-.86.21-1.39-.32-1.17-1.17l.61-2.56c.07-.3 0-.75-.13-1.03-.76-1.59-1.06-3.44-.75-5.38.6-3.72 3.62-6.74 7.35-7.36 6.16-.99 11.41 4.25 10.4 10.41l.03.01Z"
      />
      <path
        fill="#000"
        d="M9.75 8.49c-.26 0-.51.11-.73.33-.19.18-.32.37-.4.59-.08.21-.13.44-.13.68 0 .37.08.75.25 1.15.17.4.4.8.69 1.2.29.4.62.78.98 1.15.37.36.75.69 1.15.98.4.29.81.52 1.21.7.4.18.79.26 1.15.26.25 0 .47-.05.69-.13.21-.09.4-.22.58-.41.1-.11.18-.23.24-.36.06-.13.09-.26.09-.38 0-.1-.02-.19-.06-.27a.5.5 0 0 0-.19-.22l-1.16-.83c-.09-.06-.17-.11-.25-.14a.632.632 0 0 0-.21-.05c-.09 0-.17.02-.25.07-.08.04-.17.11-.25.2l-.27.26s-.08.06-.14.06c-.03 0-.06 0-.09-.01-.02-.01-.05-.02-.06-.03-.12-.06-.27-.17-.45-.32a8.856 8.856 0 0 1-1.07-1.08c-.15-.18-.26-.33-.33-.45 0-.02-.02-.04-.03-.07 0-.03-.01-.05-.01-.08 0-.06.02-.1.06-.14l.27-.28c.08-.08.15-.17.2-.25a.475.475 0 0 0 .02-.46c-.03-.08-.08-.16-.14-.25l-.82-1.15a.588.588 0 0 0-.24-.2.706.706 0 0 0-.28-.06l-.02-.01Z"
      />
    </g>
    <defs>
      <clipPath id="Whatsapp_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgWhatsapp;