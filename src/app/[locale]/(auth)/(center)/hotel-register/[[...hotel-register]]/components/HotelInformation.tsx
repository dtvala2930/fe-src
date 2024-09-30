// import { isBefore } from 'date-fns'
import { useFormContext } from "react-hook-form";
import BusinessHourContainer from "./BusinessHourContainer";
import InputContainer from "./InputContainer";
import SelectContainer from "./SelectContainer";

const HotelInformation = () => {
  const errorStyle = "text-sm text-red-500";
  const { watch } = useFormContext();

  const selectedPrefecture = watch("prefecture");

  const dateOfWeek = ["monday", "tuesday", "wednesday", "thursday", "saturday", "friday", "sunday"];

  const prefectures = [
    {
      label: "Prefectures",
      items: [
        { value: "tokyo", label: "Tokyo" },
        { value: "osaka", label: "Osaka" },
        { value: "kyoto", label: "Kyoto" },
        { value: "fukuoka", label: "Fukuoka" },
        { value: "nagoya", label: "Nagoya" },
      ],
    },
  ];
  const areas = [
    {
      label: "Tokyo",
      items: [
        { value: "a1", label: "A" },
        { value: "b1", label: "B" },
        { value: "c1", label: "C" },
        { value: "d1", label: "D" },
        { value: "e1", label: "E" },
        { value: "f1", label: "F" },
      ],
    },
    {
      label: "Osaka",
      items: [
        { value: "a2", label: "A" },
        { value: "b2", label: "B" },
        { value: "c2", label: "C" },
        { value: "d2", label: "D" },
        { value: "e2", label: "E" },
        { value: "f2", label: "F" },
      ],
    },
    {
      label: "Kyoto",
      items: [
        { value: "a3", label: "A" },
        { value: "b3", label: "B" },
        { value: "c3", label: "C" },
        { value: "d3", label: "D" },
        { value: "e3", label: "E" },
        { value: "f3", label: "F" },
      ],
    },
    {
      label: "Fukuoka",
      items: [
        { value: "a4", label: "A" },
        { value: "b4", label: "B" },
        { value: "c4", label: "C" },
        { value: "d4", label: "D" },
        { value: "e4", label: "E" },
        { value: "f4", label: "F" },
      ],
    },
    {
      label: "Nagoya",
      items: [
        { value: "a5", label: "A" },
        { value: "b5", label: "B" },
        { value: "c5", label: "C" },
        { value: "d5", label: "D" },
        { value: "e5", label: "E" },
        { value: "f5", label: "F" },
      ],
    },
    {
      label: "Sapporo",
      items: [
        { value: "a6", label: "A" },
        { value: "b6", label: "B" },
        { value: "c6", label: "C" },
        { value: "d6", label: "D" },
        { value: "e6", label: "E" },
        { value: "f6", label: "F" },
      ],
    },
  ];
  const filteredAreas = areas.filter((areaGroup) => areaGroup.label.toLowerCase() === selectedPrefecture.toLowerCase());

  return (
    <>
      <div className="mt-5 font-bold text-xl capitalize">Hotel Information</div>
      <div className="mt-2 grid w-full grid-cols-1 gap-2 sm:grid-cols-2">
        <SelectContainer
          data={prefectures}
          errorStyle={errorStyle}
          nameValue="prefecture"
          selectTitle="Prefectures"
          placeHolder="Select prefecture"
        />
        <SelectContainer
          data={selectedPrefecture ? filteredAreas : []}
          errorStyle={errorStyle}
          nameValue="area"
          selectTitle="Area"
          placeHolder="Select area"
        />
      </div>
      <InputContainer
        errorStyle={errorStyle}
        nameValue={"hotelAddress"}
        inputTitle={"Address"}
        placeHolder="Tokyo Street, Tokyo"
      />
      <InputContainer
        errorStyle={errorStyle}
        nameValue={"hotelName"}
        inputTitle={"Hotel Name"}
        placeHolder="東京のホテル"
      />
      <InputContainer
        errorStyle={errorStyle}
        nameValue={"hotelEnglishName"}
        inputTitle={"Hotel Name (English)"}
        placeHolder="Tokyo Hotel"
      />

      <div className="mt-5 font-bold text-lg">Hotel Business Hours</div>
      <br />
      {dateOfWeek.map((date) => (
        <BusinessHourContainer key={date} errorStyle={errorStyle} date={date} />
      ))}
    </>
  );
};

export default HotelInformation;
