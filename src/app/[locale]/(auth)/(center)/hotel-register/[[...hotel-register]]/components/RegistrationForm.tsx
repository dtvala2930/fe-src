"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { addDays, format } from "date-fns";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "~/shared/components/base/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/shared/components/base/tabs";
import { REGEX } from "~/shared/utils";
import HotelInformation from "./HotelInformation";
import PersonalInformation from "./PersonalInformation";

const timeRegex = REGEX.TIME;

const createHourSchema = (day: string, hourType: "Open" | "Close") =>
  z.string().regex(timeRegex, {
    message: `${hourType} hour for ${day} must be in HH:MM format (24-hour).`,
  });

const formSchema = z
  .object({
    firstName: z.string().min(2, {
      message: "First name must be at least 2 characters.",
    }),
    lastName: z.string().min(2, {
      message: "First name must be at least 2 characters.",
    }),
    email: z
      .string()
      .min(1, {
        message: "Email has to be filled",
      })
      .email("This is not valid email"),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" })
      .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
      .regex(/[0-9]/, { message: "Password must contain at least one number" })
      .regex(/[^A-Za-z0-9]/, { message: "Password must contain at least one special character" }),
    confirmPassword: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" })
      .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
      .regex(/[0-9]/, { message: "Password must contain at least one number" })
      .regex(/[^A-Za-z0-9]/, { message: "Password must contain at least one special character" }),
    phoneNumber: z
      .string()
      .min(10, { message: "Telephone number must be at least 10 numbers" })
      .max(11, { message: "Telephone number must be at most 11 numbers" })
      .regex(/^\d{10,11}$/, { message: "Telephone number must be a valid number" }),
    prefecture: z
      .string()
      .min(1, { message: "Please select a prefecture" })
      .refine((value) => value !== "", { message: "Please select a prefecture" }),
    area: z
      .string()
      .min(1, { message: "Please select an area" })
      .refine((value) => value !== "", { message: "Please select an area" }),
    hotelAddress: z
      .string()
      .min(1, { message: "Address has to be filled" })
      .refine((value) => value !== "", { message: "Address has to be filled" }),
    hotelName: z
      .string()
      .min(1, { message: "Hotel name has to be filled" })
      .refine((value) => value !== "", { message: "Hotel name has to be filled" }),
    hotelEnglishName: z
      .string()
      .min(1, { message: "Hotel name (English) has to be filled" })
      .refine((value) => value !== "", { message: "Hotel name (English) has to be filled" }),
    publicationDate: z
      .string()
      .date()
      .refine(
        (value) => {
          const publicationDate = new Date(value);
          const currentDate = new Date();
          currentDate.setHours(0, 0, 0, 0);
          return publicationDate > currentDate;
        },
        {
          message: "Publication date must be greater than the current date.",
        },
      ),
    mondayOpenHour: createHourSchema("monday", "Open"),
    mondayCloseHour: createHourSchema("monday", "Close"),
    tuesdayOpenHour: createHourSchema("tuesday", "Open"),
    tuesdayCloseHour: createHourSchema("tuesday", "Close"),
    wednesdayOpenHour: createHourSchema("wednesday", "Open"),
    wednesdayCloseHour: createHourSchema("wednesday", "Close"),
    thursdayOpenHour: createHourSchema("thursday", "Open"),
    thursdayCloseHour: createHourSchema("thursday", "Close"),
    fridayOpenHour: createHourSchema("friday", "Open"),
    fridayCloseHour: createHourSchema("friday", "Close"),
    saturdayOpenHour: createHourSchema("saturday", "Open"),
    saturdayCloseHour: createHourSchema("saturday", "Close"),
    sundayOpenHour: createHourSchema("sunday", "Open"),
    sundayCloseHour: createHourSchema("sunday", "Close"),
  })
  .superRefine((data: { [key: string]: string }, ctx) => {
    const days = [
      { open: "mondayOpenHour", close: "mondayCloseHour", day: "Monday" },
      { open: "tuesdayOpenHour", close: "tuesdayCloseHour", day: "Tuesday" },
      { open: "wednesdayOpenHour", close: "wednesdayCloseHour", day: "Wednesday" },
      { open: "thursdayOpenHour", close: "thursdayCloseHour", day: "Thursday" },
      { open: "fridayOpenHour", close: "fridayCloseHour", day: "Friday" },
      { open: "saturdayOpenHour", close: "saturdayCloseHour", day: "Saturday" },
      { open: "sundayOpenHour", close: "sundayCloseHour", day: "Sunday" },
    ];
    for (const { open, close, day } of days) {
      if (data[open] && data[close] && data[open] >= data[close]) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: `${day} open time must be earlier than close time`,
          path: [open],
        });
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: `${day} close time must be later than open time`,
          path: [close],
        });
      }
    }
  });

const RegistrationForm = () => {
  const openHour = "08:00";
  const closeHour = "22:00";
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      phoneNumber: "",
      prefecture: "",
      area: "",
      hotelAddress: "",
      hotelName: "",
      hotelEnglishName: "",
      publicationDate: format(addDays(new Date(), 1).toString(), "yyyy-MM-dd"),
      mondayOpenHour: openHour,
      mondayCloseHour: closeHour,
      tuesdayOpenHour: openHour,
      tuesdayCloseHour: closeHour,
      wednesdayOpenHour: openHour,
      wednesdayCloseHour: closeHour,
      thursdayOpenHour: openHour,
      thursdayCloseHour: closeHour,
      saturdayOpenHour: openHour,
      saturdayCloseHour: closeHour,
      fridayOpenHour: openHour,
      fridayCloseHour: closeHour,
      sundayOpenHour: openHour,
      sundayCloseHour: closeHour,
    },
  });

  function onSubmit(_values: z.infer<typeof formSchema>) {
    //console.log(_values);
  }

  return (
    <div className="flex min-h-[100vh] justify-center">
      <div className="flex h-full w-full flex-col items-center justify-center lg:w-[50%]">
        <div className="sticky top-0 flex h-[50px] w-full items-center justify-center bg-black text-center text-white capitalize">
          Register form for hotels
        </div>
        <FormProvider {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="form h-auto w-full space-y-2 border-2 border-black border-solid p-10 text-black"
          >
            <Tabs defaultValue="personal" className="w-full">
              <TabsList className="grid h-full w-full grid-cols-2 rounded-lg bg-[#a1a1aa]">
                <TabsTrigger
                  value="personal"
                  className="rounded-l-lg p-2 font-semibold text-white transition-colors duration-300 hover:bg-black focus:outline-none focus:ring-2 focus:ring-slate-500 active:bg-slate-400"
                >
                  Personal
                </TabsTrigger>
                <TabsTrigger
                  value="hotel"
                  className="rounded-r-lg p-2 font-semibold text-white transition-colors duration-300 hover:bg-black focus:outline-none focus:ring-2 focus:ring-slate-500 active:bg-slate-400"
                >
                  Hotel
                </TabsTrigger>
              </TabsList>
              <TabsContent value="personal">
                <PersonalInformation />
              </TabsContent>
              <TabsContent value="hotel">
                <HotelInformation />
              </TabsContent>
            </Tabs>
            <div className="pt-10">
              <Button type="submit" className="mt-5 w-full text-center">
                Submit
              </Button>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default RegistrationForm;
