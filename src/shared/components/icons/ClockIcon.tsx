const ClockIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <title>Clock Icon</title>
      <ellipse cx="12" cy="11.9999" rx="9.12" ry="9.12" stroke="#333333" strokeWidth="2" />
      <path d="M11.52 6.71973V12.4797H17.28" stroke="#333333" strokeWidth="2" />
    </svg>
  );
};

export default ClockIcon;
