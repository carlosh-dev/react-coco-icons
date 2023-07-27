import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTicket1 = ({
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
      clipPath="url(#Ticket-1_svg__a)"
    >
      <path d="M17.05 14.73A1.94 1.94 0 0 0 19 15.99v1.51c0 .93-.37 1.82-1.03 2.47-.65.65-1.55 1.02-2.47 1.02h-7c-.92 0-1.82-.37-2.47-1.02A3.464 3.464 0 0 1 5 17.5v-1.51c.27.02.54-.02.81-.11.26-.09.5-.24.7-.42.2-.19.36-.41.47-.67.12-.25.17-.52.17-.8s-.05-.55-.17-.8c-.11-.25-.26-.48-.47-.67-.2-.19-.44-.33-.7-.42-.26-.09-.53-.13-.81-.11v-5.5c0-.93.37-1.82 1.03-2.47.65-.66 1.55-1.03 2.47-1.03h7c.92 0 1.82.37 2.47 1.03.66.66 1.03 1.55 1.03 2.47v5.5h-.07c-.33 0-.65.08-.94.23-.28.15-.53.37-.72.64-.18.27-.3.58-.34.91-.04.33 0 .65.13.96h-.01ZM10.49 14h3.01" />
    </g>
    <defs>
      <clipPath id="Ticket-1_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTicket1;
