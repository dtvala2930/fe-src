const ElevatorIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <title>Elevator Icon</title>
      <path
        d="M19.5 3.5H5.5C4.4 3.5 3.5 4.4 3.5 5.5V19.5C3.5 20.6 4.4 21.5 5.5 21.5H19.5C20.6 21.5 21.5 20.6 21.5 19.5V5.5C21.5 4.4 20.6 3.5 19.5 3.5ZM8.5 5.5C9.3 5.5 10 6.2 10 7C10 7.8 9.3 8.5 8.5 8.5C7.7 8.5 7 7.8 7 7C7 6.2 7.7 5.5 8.5 5.5ZM11.5 14.5H10V19.5H7V14.5H5.5V11.5C5.5 10.4 6.4 9.5 7.5 9.5H9.5C10.6 9.5 11.5 10.4 11.5 11.5V14.5ZM16.4 19.5L13.5 14.7H19.3L16.4 19.5ZM13.5 10.5L16.5 5.5L19.5 10.5H13.5Z"
        fill="#0B6AB3"
      />
    </svg>
  );
};

export default ElevatorIcon;
