import InputContainer from "./InputContainer";

const PersonalInformation = () => {
  const errorStyle = "text-sm text-red-500";
  return (
    <>
      <div className="mt-5 font-bold text-xl capitalize">Personal Information</div>
      <div className="mt-2 grid w-full grid-cols-2 gap-2">
        <InputContainer nameValue="firstName" errorStyle={errorStyle} inputTitle="First Name" placeHolder="John" />
        <InputContainer nameValue="lastName" errorStyle={errorStyle} inputTitle="Last Name" placeHolder="Doe" />
      </div>
      <InputContainer
        type="email"
        nameValue="email"
        errorStyle={errorStyle}
        inputTitle="Email"
        placeHolder="john.doe@gmail.com"
      />
      <InputContainer
        type="password"
        nameValue="password"
        errorStyle={errorStyle}
        inputTitle="Password"
        placeHolder="************"
      />
      <InputContainer
        type="password"
        nameValue="confirmPassword"
        errorStyle={errorStyle}
        inputTitle="Confirm Password"
        placeHolder="************"
      />
      <InputContainer
        nameValue="phoneNumber"
        errorStyle={errorStyle}
        inputTitle="Phone Number"
        placeHolder="01234456789"
      />
    </>
  );
};

export default PersonalInformation;
