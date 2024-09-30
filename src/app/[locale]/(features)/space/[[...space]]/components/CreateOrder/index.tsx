"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button, Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "~/shared/components";
import { DatePicker } from "~/shared/components/base/date-picker";
import { BagIcon } from "~/shared/components/icons";
import SuiteCaseIcon from "~/shared/components/icons/SuiteCaseIcon";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/src/components/base/select";
import LuggageItem from "./LuggageItem";

const formSchema = () =>
  z.object({
    depositTime: z.string({ required_error: "Please provide a deposit time" }),
    pickUpTime: z.string({ required_error: "Please provide a pick-up time" }),
    pickUpDate: z.object({
      from: z.date({ required_error: "Please provide a from date" }),
      to: z.date({ required_error: "Please provide a to date" }),
    }),
    bagSize: z.coerce.number({ required_error: "Please provide the bag size" }),
    suiteCaseSize: z.coerce.number({ required_error: "Please provide the suitcase size" }),
  });

function CreateOrder() {
  const form = useForm<z.infer<ReturnType<typeof formSchema>>>({
    resolver: zodResolver(formSchema()),
    defaultValues: {
      depositTime: "",
      pickUpTime: "",
      pickUpDate: { from: new Date(), to: new Date() },
      bagSize: 0,
      suiteCaseSize: 0,
    },
  });

  const onSubmit = (values: z.infer<ReturnType<typeof formSchema>>) => {
    // biome-ignore lint/suspicious/noConsoleLog: <explanation>
    console.log("Submitted form:", values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="sticky top-[100px] right-column flex h-fit w-full flex-col gap-2 rounded-[6px] bg-alice-blue px-12 pt-9 pb-[38px] md:max-w-[415px]"
      >
        <DatePicker />

        <div className="flex flex-col gap-4 md:flex-row">
          {/* Deposit Time */}
          <FormField
            control={form.control}
            name="depositTime"
            render={({ field }) => (
              <FormItem className="flex w-full flex-1 flex-col gap-2">
                <FormLabel className="font-bold text-base">Deposit Time</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a time" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="10:00">10:00</SelectItem>
                    <SelectItem value="10:30">10:30</SelectItem>
                    <SelectItem value="11:00">11:00</SelectItem>
                    <SelectItem value="11:30">11:30</SelectItem>
                    <SelectItem value="12:00">12:00</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* PickUp Time */}
          <FormField
            control={form.control}
            name="pickUpTime"
            render={({ field }) => (
              <FormItem className="flex w-full flex-1 flex-col gap-2">
                <FormLabel className="font-bold text-base">Pick-up Time</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a time" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="10:00">10:00</SelectItem>
                    <SelectItem value="10:30">10:30</SelectItem>
                    <SelectItem value="11:00">11:00</SelectItem>
                    <SelectItem value="11:30">11:30</SelectItem>
                    <SelectItem value="12:00">12:00</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {/* No. of luggage */}
        <p className="font-bold text-base">No. of luggage</p>
        <div className="flex flex-col gap-4">
          {/* Bag size */}
          <LuggageItem name="bagSize" icon={<BagIcon />} title="Bag size" min={0} max={10} />
          {/* Suitcase size */}
          <LuggageItem name="suiteCaseSize" icon={<SuiteCaseIcon />} title="Suitcase size" min={0} max={10} />
        </div>
        {/* Price */}
        <div className="mt-12 flex gap-[17px]">
          <p className="font-bold text-base">Price</p>
          <p>¥ -----</p>
        </div>
        <Button className="mt-4 h-11" type="submit">
          Order
        </Button>
      </form>
    </Form>
  );
}

export default CreateOrder;
