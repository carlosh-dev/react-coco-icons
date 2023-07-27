import * as React from "react";
const SvgCup = ({ title, titleId, ...props }) => (
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
      d="M7.273 3.223 7.16 2.48l.113.742Zm5.863 0 .113-.742-.113.742Zm-.302 17.545-.131-.738.13.738Zm-5.259 0 .132-.738-.132.738ZM3.55 17.301l-.717.221.717-.221Zm-.89-9.695.745.087-.744-.087Zm15.163.62.745-.086-.745.087Zm-.777 8.478-.717-.221.717.221ZM2.695 7.296l-.744-.087.745.087ZM6.509 3.34l.113.741-.113-.741Zm.933 17.405-.13.738.13-.738Zm9.46-3.574.716.22-.716-.22Zm.838-9.657-.745.087.745-.087Zm-4.053-4.207-.114.741.114-.741Zm4.589 12.499v-.75.75Zm3.14-4.015-.734.157.733-.157Zm.01.051.734-.157-.734.157Zm0 1.412-.733-.158.733.158ZM18.327 9.29v-.75.75ZM17.3 15.806l-.726-.189.726.189Zm.619-6.516-.749.049.749-.049Zm-.925-1.69.083.714 1.49-.174-.083-.713-1.49.174Zm-.666 8.883-.144.466 1.433.443.144-.467-1.433-.442ZM3.404 7.693l.037-.31-1.49-.174-.036.31 1.49.174ZM7.707 20.03l-.134-.024-.263 1.477.134.024.263-1.477ZM6.62 4.081l.766-.117-.227-1.483-.765.117.226 1.483Zm6.402-.117.55.084.226-1.483-.55-.084-.226 1.483Zm-5.636 0a18.657 18.657 0 0 1 5.636 0l.226-1.483a20.157 20.157 0 0 0-6.089 0l.227 1.483Zm5.316 16.066a14.294 14.294 0 0 1-4.996 0l-.263 1.477c1.826.324 3.695.324 5.52 0l-.261-1.477Zm-8.437-2.95a22.84 22.84 0 0 1-.862-9.387l-1.49-.174a24.34 24.34 0 0 0 .918 10.003l1.434-.442ZM3.44 7.383a3.781 3.781 0 0 1 3.18-3.302l-.226-1.483A5.281 5.281 0 0 0 1.95 7.21l1.49.174Zm-.609 10.14a5.739 5.739 0 0 0 4.478 3.96l.263-1.477a4.239 4.239 0 0 1-3.307-2.926l-1.434.442Zm13.352-.574a4.462 4.462 0 0 1-3.481 3.081l.262 1.477a5.962 5.962 0 0 0 4.652-4.115l-1.433-.443Zm2.3-9.522a5.568 5.568 0 0 0-4.685-4.862l-.227 1.483a4.068 4.068 0 0 1 3.422 3.553l1.49-.174Zm-.21 7.629h-.488v1.5h.489v-1.5Zm2.407-3.108.01.051 1.468-.314-.011-.051-1.467.314Zm.01.051c.078.362.078.736 0 1.097l1.468.315a4.116 4.116 0 0 0 0-1.726L20.692 12Zm-2.416 4.557a3.974 3.974 0 0 0 3.884-3.145l-1.467-.315a2.474 2.474 0 0 1-2.417 1.96v1.5Zm.052-6.516a2.41 2.41 0 0 1 2.354 1.908l1.467-.314a3.91 3.91 0 0 0-3.82-3.094v1.5Zm-1.753 5.577c-.076.29-.157.579-.246.866l1.433.442c.096-.308.184-.619.265-.93l-1.452-.378Zm1.212-.561H17.3v1.5h.486v-1.5Zm-.709-6.742c.04.341.071.683.093 1.025l1.497-.097a21.371 21.371 0 0 0-.1-1.102l-1.49.174Zm.093 1.025a19.88 19.88 0 0 1-.596 6.278l1.452.377c.572-2.202.788-4.482.641-6.752l-1.497.097Zm1.157-.799h-.408v1.5h.408v-1.5Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M6 11.5v.764c0 1.47.342 2.92 1 4.236"
    />
  </svg>
);
export default SvgCup;
