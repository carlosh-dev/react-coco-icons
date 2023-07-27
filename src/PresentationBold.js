import * as React from "react";
const SvgPresentationBold = ({ title, titleId, ...props }) => (
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
      d="M16.312 3.43a21.788 21.788 0 0 0-8.624 0c-1.783.36-3.218 1.726-3.71 3.532l-.043.154c-.58 2.128-.58 4.38 0 6.508l.042.154c.493 1.805 1.928 3.17 3.711 3.53 1.198.242 2.41.383 3.625.42v1.855H9.711a.698.698 0 0 0-.686.708c0 .392.307.709.686.709h4.578c.379 0 .686-.317.686-.709a.698.698 0 0 0-.686-.708h-1.602v-1.854a21.794 21.794 0 0 0 3.625-.42c1.783-.36 3.218-1.726 3.71-3.531l.043-.154c.58-2.128.58-4.38 0-6.508l-.042-.154c-.492-1.806-1.928-3.171-3.711-3.531ZM14.047 11.5l.023-.021 1.502-1.396a.58.58 0 0 0 .04-.8.537.537 0 0 0-.775-.042l-1.502 1.395a7.285 7.285 0 0 1-.314.282 7.442 7.442 0 0 1-.236-.354l-.656-1.016-.017-.026a4.85 4.85 0 0 0-.364-.516c-.136-.158-.334-.33-.625-.367-.291-.038-.524.078-.694.196-.15.104-.313.255-.476.407l-.023.021-1.501 1.395a.58.58 0 0 0-.041.8c.203.233.55.252.775.043l1.502-1.395c.147-.137.242-.224.314-.282.055.074.126.183.236.353l.656 1.017.017.026c.122.188.243.376.364.515.136.158.334.33.625.368.291.038.524-.078.694-.196.15-.105.313-.256.476-.407Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPresentationBold;
