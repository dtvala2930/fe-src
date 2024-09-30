import type React from "react";

const ChargeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="11" height="12" viewBox="0 0 11 12" xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>Charge</title>
    <path
      d="M6.16 4.95999V3.35999H5.36V4.95999H3.76V3.35999H2.96V4.95999C2.56 4.95999 2.16 5.35999 2.16 5.75999V7.54577C2.16 7.81099 2.26536 8.06534 2.4529 8.25288L3.31148 9.11146C3.47061 9.27059 3.56 9.48641 3.56 9.71146C3.56 10.1801 3.9399 10.56 4.40853 10.56H4.71147C5.1801 10.56 5.56 10.1801 5.56 9.71146C5.56 9.48641 5.6494 9.27059 5.80853 9.11146L6.66711 8.25288C6.85465 8.06534 6.96 7.81099 6.96 7.54577V5.75999C6.96 5.35999 6.56 4.95999 6.16 4.95999Z"
      fill="currentColor"
    />
    <path d="M8.52 6.71999V4.41599H7.44L9.24 0.959991V3.26399H10.32L8.52 6.71999Z" fill="currentColor" />
  </svg>
);

export default ChargeIcon;
