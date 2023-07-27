import * as React from "react";
const SvgNotification = ({ title, titleId, ...props }) => (
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
      d="m5.635 7.94-.724-.196.724.196Zm4.394-4.618.233.713-.233-.713ZM5.58 8.142l.724.196-.724-.195Zm-.206 4.348-.739.126.74-.126Zm.024.14-.739.127.74-.127Zm.044.225.3.688a.75.75 0 0 0 .433-.85l-.733.162Zm.472 4.56-.15.735.15-.734Zm.376.077.15-.734-.15.734Zm11.42 0-.15-.734.15.734Zm.376-.076.15.734-.15-.734Zm.47-4.561-.731-.166a.75.75 0 0 0 .433.854l.298-.688Zm.05-.252.74.127-.74-.127Zm.026-.148-.74-.126.74.126Zm-.186-4.282-.726.19.726-.19Zm-.073-.28.726-.19-.726.19Zm-4.269-4.565.237-.711-.237.711Zm.701 15.32-.732-.16.732.16Zm-.072.333.733.16-.733-.16Zm-5.466 0 .733-.16-.733.16Zm-.072-.333-.733.16.733-.16Zm3.69 2.224-.175-.73.175.73Zm-.196.047.175.73-.175-.73Zm-1.378 0 .174-.73-.174.73Zm-.196-.047-.174.73.174-.73Zm-.95-3.314a.75.75 0 0 0-1.13-.985l1.13.985Zm4.8-.985a.75.75 0 0 0-1.13.985l1.13-.985ZM6.36 8.135a5.965 5.965 0 0 1 3.903-4.1l-.465-1.426a7.465 7.465 0 0 0-4.886 5.135l1.448.391Zm-.055.203.055-.203-1.448-.39-.055.202 1.448.39Zm-.19 4.026a9.398 9.398 0 0 1 .19-4.026l-1.448-.39a10.898 10.898 0 0 0-.22 4.668l1.478-.252Zm.024.14-.024-.14-1.479.252.024.14 1.479-.252Zm.037.19a3.931 3.931 0 0 1-.037-.19l-1.479.253c.015.087.032.174.051.26l1.465-.324ZM4.75 15.06c0-.68.408-1.264.991-1.518l-.598-1.375A3.153 3.153 0 0 0 3.25 15.06h1.5Zm1.315 1.62a1.65 1.65 0 0 1-1.315-1.62h-1.5a3.15 3.15 0 0 0 2.514 3.09l.3-1.47Zm.375.077-.375-.077-.301 1.47.376.076.3-1.47Zm11.12 0c-3.67.75-7.45.75-11.12 0l-.3 1.47c3.867.79 7.853.79 11.72 0l-.3-1.47Zm.375-.077-.375.077.3 1.47.376-.078-.3-1.47Zm1.315-1.62a1.65 1.65 0 0 1-1.315 1.62l.301 1.47a3.15 3.15 0 0 0 2.514-3.09h-1.5Zm-.992-1.518c.583.253.992.838.992 1.518h1.5c0-1.296-.78-2.41-1.895-2.894l-.597 1.376Zm-.391-1.066a3.838 3.838 0 0 1-.042.212l1.463.332c.021-.096.04-.193.058-.292l-1.48-.252Zm.025-.148-.025.148 1.479.252.025-.148-1.479-.252Zm-.172-3.967a9.43 9.43 0 0 1 .172 3.967l1.479.252c.26-1.53.193-3.097-.2-4.598l-1.45.38Zm-.073-.28.073.28 1.452-.379-.073-.28-1.452.379ZM13.868 4.04a5.798 5.798 0 0 1 3.78 4.042l1.45-.38a7.298 7.298 0 0 0-4.757-5.085l-.473 1.423Zm-3.606-.005a5.796 5.796 0 0 1 3.606.005l.473-1.423a7.296 7.296 0 0 0-4.544-.008l.465 1.426Zm3.81 14.454-.072.333 1.466.319.072-.333-1.466-.32ZM10 18.822l-.072-.333-1.466.319.072.333L10 18.82Zm2.71 1.32-.195.047.348 1.46.196-.048-.348-1.459Zm-1.225.047-.195-.047-.35 1.46.197.046.348-1.459Zm-1.557-1.7a1.07 1.07 0 0 1 .238-.931l-1.132-.985a2.571 2.571 0 0 0-.572 2.235l1.466-.32Zm5.61.319a2.571 2.571 0 0 0-.572-2.235l-1.132.985c.222.254.31.6.239.93l1.465.32Zm-3.023 1.381c-.339.081-.691.081-1.03 0l-.348 1.46c.567.135 1.159.135 1.726 0l-.348-1.46Zm-3.98-1.048a3.235 3.235 0 0 0 2.406 2.46l.348-1.459A1.735 1.735 0 0 1 10 18.822l-1.466.319ZM14 18.82a1.735 1.735 0 0 1-1.29 1.321l.35 1.46a3.235 3.235 0 0 0 2.406-2.461L14 18.82Z"
    />
  </svg>
);
export default SvgNotification;