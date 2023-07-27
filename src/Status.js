import * as React from "react";
const SvgStatus = ({ title, titleId, ...props }) => (
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
      d="m3.353 15.05-.73.17.73-.17Zm0-6.1-.73-.17.73.17Zm17.294 0-.73.172.73-.172Zm0 6.1-.73-.172.73.172Zm-5.597 5.597-.172-.73.172.73Zm-6.1 0 .172-.73-.172.73Zm0-17.294.172.73-.172-.73Zm6.1 0-.172.73.172-.73Zm-7.193 8.87a.75.75 0 0 0 1.004 1.115l-1.004-1.115Zm2.209-.979.501.558-.501-.558Zm1.561.197.624-.417-.624.417Zm.746 1.118-.624.417.624-.417Zm1.561.197-.501-.558.501.558Zm2.209-.979a.75.75 0 0 0-1.004-1.115l1.004 1.115Zm-3.068 1.51-.094.745.094-.745Zm-2.15-2.575-.093.745.093-.745Zm-6.842 4.166a12.604 12.604 0 0 1 0-5.756l-1.46-.343a14.104 14.104 0 0 0 0 6.442l1.46-.343Zm15.834-5.756a12.603 12.603 0 0 1 0 5.756l1.46.343a14.104 14.104 0 0 0 0-6.442l-1.46.343Zm-5.039 10.795a12.603 12.603 0 0 1-5.756 0l-.343 1.46c2.119.497 4.323.497 6.442 0l-.343-1.46ZM9.122 4.083a12.604 12.604 0 0 1 5.756 0l.343-1.46a14.103 14.103 0 0 0-6.442 0l.343 1.46Zm0 15.834a6.761 6.761 0 0 1-5.039-5.039l-1.46.343a8.261 8.261 0 0 0 6.156 6.156l.343-1.46Zm6.099 1.46a8.261 8.261 0 0 0 6.156-6.156l-1.46-.343a6.761 6.761 0 0 1-5.039 5.039l.343 1.46Zm-.343-17.294a6.761 6.761 0 0 1 5.039 5.039l1.46-.343a8.261 8.261 0 0 0-6.156-6.156l-.343 1.46ZM8.78 2.623a8.261 8.261 0 0 0-6.156 6.156l1.46.343a6.761 6.761 0 0 1 5.039-5.039l-.343-1.46Zm.082 10.715 1.706-1.536-1.003-1.115-1.707 1.536 1.004 1.115Zm2.142-1.481.746 1.119 1.248-.833-.746-1.119-1.248.833Zm3.433 1.456 1.707-1.536-1.004-1.115-1.706 1.536 1.003 1.115Zm-2.687-.338c.143.214.292.442.443.611.165.185.415.399.79.446l.186-1.489a.356.356 0 0 1 .142.05c.026.016.027.024.001-.005a1.838 1.838 0 0 1-.118-.155 13.848 13.848 0 0 1-.196-.29l-1.248.832Zm1.684-.777c-.106.096-.19.17-.262.232-.073.063-.12.1-.153.121-.032.021-.029.015 0 .005a.356.356 0 0 1 .15-.013l-.187 1.489c.374.047.67-.099.875-.237.188-.126.39-.31.58-.482l-1.003-1.115Zm-2.866-.396c.106-.096.19-.17.262-.232.073-.063.12-.1.153-.121.032-.021.029-.015 0-.005a.356.356 0 0 1-.15.013l.187-1.489c-.374-.047-.67.099-.875.237-.188.126-.39.31-.58.482l1.003 1.115Zm1.684-.777c-.143-.214-.292-.442-.443-.611-.165-.185-.415-.399-.79-.446l-.186 1.489a.356.356 0 0 1-.142-.05c-.026-.016-.027-.024-.001.005.025.03.062.076.118.155.055.078.117.17.196.29l1.248-.832Z"
    />
  </svg>
);
export default SvgStatus;
