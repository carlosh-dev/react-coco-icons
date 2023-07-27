import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSendToArchive = ({
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
      strokeWidth={1.5}
      clipPath="url(#Send-to-Archive_svg__a)"
    >
      <path
        strokeMiterlimit={10}
        d="m18.73 6.21 1.85 3.07c.26.47.41 1 .42 1.54v6.67c0 .93-.37 1.82-1.02 2.47-.66.66-1.55 1.02-2.47 1.03H6.52c-.93 0-1.82-.37-2.47-1.03a3.567 3.567 0 0 1-1.03-2.47v-6.67c.03-.54.18-1.07.43-1.54L5.3 6.21"
      />
      <path
        strokeMiterlimit={10}
        d="m3 11 4.07.81c.28.07.53.21.73.4.2.19.35.44.43.71l.3 1.18c.16.53.48 1 .91 1.34.43.34.97.53 1.52.55h2.1c.55-.02 1.08-.22 1.51-.56.43-.34.76-.81.91-1.33l.3-1.18c.08-.27.23-.51.43-.71.2-.19.45-.33.73-.4l3.91-.78M12 3v8"
      />
      <path strokeLinejoin="round" d="m15 6-3-3-3 3" />
    </g>
    <defs>
      <clipPath id="Send-to-Archive_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSendToArchive;
