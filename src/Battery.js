import * as React from "react";
const SvgBattery = ({ title, titleId, ...props }) => (
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
      d="m2.286 14.5-.73.17.73-.17Zm0-5 .73.17-.73-.17Zm15.244 0-.73.17.73-.17Zm0 5-.73-.17.73.17Zm-5.254 5.223-.173-.73.173.73Zm-4.735 0 .172-.73-.172.73Zm0-15.446.172.73-.172-.73Zm4.735 0-.173.73.173-.73Zm-4.972 15.39-.173.73.173-.73Zm5.209 0 .172.73-.172-.73Zm0-15.334.172-.73-.172.73Zm-5.21 0-.172-.73.173.73ZM17.2 15.55l-.696-.279-.41 1.027 1.105.002.001-.75Zm1.443 0v.75-.75Zm3.288-2.82.736.142-.736-.141Zm0-1.46.736-.142-.736.141ZM17.2 8.45l-.002-.75-1.106.002.411 1.027.696-.279Zm-5.129 1.775a.75.75 0 1 0-1.5 0h1.5Zm-1.5 3.55a.75.75 0 0 0 1.5 0h-1.5ZM8.678 10.58a.75.75 0 0 0-1.5 0h1.5Zm-1.5 2.84a.75.75 0 0 0 1.5 0h-1.5Zm.298-8.357.237-.056-.345-1.46-.237.056.345 1.46Zm4.627-.056.237.056.345-1.46-.237-.056-.345 1.46Zm.237 13.93-.237.056.345 1.46.237-.056-.345-1.46Zm-4.627.056-.237-.056-.345 1.46.237.056.345-1.46ZM3.017 14.33a10.314 10.314 0 0 1 0-4.66l-1.461-.34a11.814 11.814 0 0 0 0 5.34l1.46-.34Zm13.782-4.66c.356 1.53.356 3.13 0 4.66l1.462.34a11.814 11.814 0 0 0 0-5.34l-1.462.34Zm-4.696 9.323a9.51 9.51 0 0 1-4.39 0l-.345 1.46a11.01 11.01 0 0 0 5.08 0l-.345-1.46ZM7.713 5.007a9.51 9.51 0 0 1 4.39 0l.345-1.46a11.01 11.01 0 0 0-5.08 0l.345 1.46Zm-.237 13.93c-2.183-.517-3.921-2.29-4.46-4.607l-1.46.34c.66 2.842 2.809 5.071 5.575 5.727l.345-1.46Zm5.21 1.46c2.765-.655 4.914-2.885 5.575-5.727l-1.462-.34c-.537 2.316-2.276 4.09-4.46 4.607l.346 1.46ZM12.34 5.063c2.183.517 3.922 2.29 4.46 4.607l1.46-.34c-.66-2.842-2.809-5.072-5.575-5.727l-.345 1.46Zm-5.21-1.46c-2.765.655-4.914 2.885-5.574 5.727l1.46.34c.539-2.316 2.277-4.09 4.46-4.607l-.345-1.46ZM17.2 16.3h.346v-1.5h-.343l-.003 1.5Zm.346 0h1.098v-1.5h-1.098v1.5Zm1.098 0c1.981 0 3.648-1.459 4.024-3.428l-1.473-.282c-.25 1.309-1.336 2.21-2.551 2.21v1.5Zm4.024-3.428c.11-.576.11-1.168 0-1.744l-1.473.282c.075.39.075.79 0 1.18l1.474.282Zm0-1.744c-.376-1.97-2.043-3.428-4.024-3.428v1.5c1.215 0 2.3.901 2.551 2.21l1.474-.282ZM18.643 7.7h-1.098v1.5h1.098V7.7Zm-1.098 0h-.346l.003 1.5h.343V7.7Zm-1.04 1.029c.12.301.219.616.294.94l1.462-.339a7.97 7.97 0 0 0-.364-1.159l-1.393.558Zm.294 5.601c-.075.325-.174.64-.295.941l1.393.558c.149-.373.27-.76.364-1.16l-1.462-.339Zm-6.227-4.105v3.55h1.5v-3.55h-1.5Zm-3.394.355v2.84h1.5v-2.84h-1.5Z"
    />
  </svg>
);
export default SvgBattery;