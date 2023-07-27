import * as React from "react";
const SvgPdf = ({ title, titleId, ...props }) => (
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
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.586 2.586A2 2 0 0 0 13.172 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.828a2 2 0 0 0-.586-1.414l-4.828-4.828Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14 2v6h6"
    />
    <rect
      width={11.068}
      height={6.072}
      x={2.907}
      y={12.007}
      fill="#FDFDFD"
      rx={1.5}
    />
    <path
      fill="currentColor"
      d="M6.137 13.553c-.115-.032-.361-.046-.737-.046h-.993v3.072h.62v-1.157h.405c.279 0 .494-.015.643-.046a.868.868 0 0 0 .582-.448c.068-.13.101-.288.101-.475 0-.245-.059-.443-.177-.598a.793.793 0 0 0-.444-.303Zm-.087 1.146a.401.401 0 0 1-.195.15c-.082.03-.246.047-.491.047h-.339v-.87h.3c.222 0 .372.006.445.02a.426.426 0 0 1 .249.136.4.4 0 0 1 .099.277.405.405 0 0 1-.068.24ZM9.445 13.849a1.036 1.036 0 0 0-.463-.283 2.174 2.174 0 0 0-.584-.059H7.266v3.072h1.166c.228 0 .412-.023.547-.065.184-.06.328-.141.435-.246a1.36 1.36 0 0 0 .328-.542c.062-.183.093-.4.093-.652 0-.288-.034-.53-.102-.726-.062-.2-.16-.364-.288-.5Zm-.31 1.756a.635.635 0 0 1-.164.296.573.573 0 0 1-.251.127c-.076.02-.2.029-.376.029h-.463v-2.033h.28c.254 0 .423.008.508.028a.605.605 0 0 1 .288.144.69.69 0 0 1 .175.296c.042.127.062.31.062.548.003.24-.017.43-.06.565ZM10.37 16.576h.62v-1.304h1.282v-.52H10.99v-.725h1.485v-.52H10.37v3.07Z"
    />
    <rect
      width={11.068}
      height={6.072}
      x={2.907}
      y={12.007}
      stroke="currentColor"
      rx={1.5}
    />
  </svg>
);
export default SvgPdf;
