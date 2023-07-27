import * as React from "react";
const SvgGalleryBold = ({ title, titleId, ...props }) => (
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
      d="M12.383 9.128a2.489 2.489 0 1 1 4.978 0 2.489 2.489 0 0 1-4.978 0Zm2.489-1.34a1.34 1.34 0 1 0 0 2.68 1.34 1.34 0 0 0 0-2.68Zm5.387 8.402a7.64 7.64 0 0 0 .397-1.22 13.006 13.006 0 0 0 0-5.94 7.63 7.63 0 0 0-5.686-5.686 13.006 13.006 0 0 0-5.94 0A7.63 7.63 0 0 0 3.344 9.03a13.006 13.006 0 0 0 0 5.94c.048.207.105.411.17.611l.604-.603a5.592 5.592 0 0 1 7.908 0l1.69 1.69.444-.443a4.339 4.339 0 0 1 6.1-.035Zm-.558 1.09-.024-.03a3.19 3.19 0 0 0-4.705-.213l-.443.443 2.413 2.413a7.638 7.638 0 0 0 2.737-2.591.742.742 0 0 0 .022-.022Zm-3.875 3.122-4.612-4.612a4.444 4.444 0 0 0-6.284 0l-.938.938a7.63 7.63 0 0 0 5.038 3.928c1.953.459 3.987.459 5.94 0 .293-.068.578-.153.856-.254Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgGalleryBold;
