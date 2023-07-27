import * as React from "react";
const SvgComparisonBold = ({ title, titleId, ...props }) => (
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
      d="M12.71 3.692A.702.702 0 0 0 12 3c-.393 0-.71.31-.71.692v.538c-.646.04-1.289.13-1.922.276-2.512.573-4.474 2.484-5.063 4.93a10.94 10.94 0 0 0 0 5.127c.589 2.447 2.55 4.357 5.063 4.931a11.82 11.82 0 0 0 1.921.276v.538c0 .382.318.692.711.692.393 0 .71-.31.71-.692V3.692ZM14.632 4.506a.712.712 0 0 0-.854.515.692.692 0 0 0 .53.833c1.986.453 3.537 1.964 4.003 3.899a9.588 9.588 0 0 1 0 4.494c-.466 1.935-2.017 3.445-4.004 3.9a.692.692 0 0 0-.53.832c.09.372.473.603.855.515 2.513-.573 4.474-2.484 5.063-4.93a10.94 10.94 0 0 0 0-5.127c-.589-2.447-2.55-4.358-5.063-4.931Z"
    />
  </svg>
);
export default SvgComparisonBold;
