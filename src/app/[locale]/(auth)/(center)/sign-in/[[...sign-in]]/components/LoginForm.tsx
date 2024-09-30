"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button, Form, FormControl, FormField, FormItem, FormLabel, FormMessage, Input } from "~/shared/components";

const LoginForm = () => {
  const [inputType, setInputType] = useState<"text" | "password">("password");

  const formLogin = z.object({
    email: z.string().min(1, { message: "Email should not be empty" }).email({ message: "It is not format of email" }),
    password: z.string().min(1, { message: "Password should not be empty" }),
  });
  const form = useForm<z.infer<typeof formLogin>>({
    resolver: zodResolver(formLogin),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Call api login to verify password and email
  const handleLogin = () => {};

  // Resolving prop's type of input between password and text
  const handlePasswordInputType = () => {
    if (inputType === "text") setInputType("password");
    else setInputType("text");
  };
  return (
    <div>
      <Form {...form}>
        <form className="w-full space-y-7">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    className="focus-visible:outline-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                    placeholder="Enter your email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <div className="flex w-[100%] flex-1 items-end">
                    <Input
                      className="flex-1 rounded-r-none focus-visible:outline-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                      type={inputType}
                      placeholder="Enter your password"
                      {...field}
                    />
                    <Button
                      onClick={(e) => {
                        e.preventDefault();
                        handlePasswordInputType();
                      }}
                      className="justify-end rounded-r-md rounded-l-none bg-medium-blue align-middle hover:bg-medium-blue"
                    >
                      {inputType === "text" ? (
                        <EyeOpenIcon className="border-l-0 text-white" />
                      ) : (
                        <EyeClosedIcon color="black" className="border-l-0" />
                      )}
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormMessage />
          <Button
            onClick={form.handleSubmit(handleLogin)}
            className=" w-full bg-medium-blue font-bold text-[.75rem] hover:bg-[#E8F0FE] hover:text-black"
            type="submit"
          >
            Login
          </Button>
        </form>
      </Form>
      <div className="mt-8 flex flex-col items-center justify-center">
        <Link
          className="w-full rounded-md border border-[#8d8d8d] px-4 py-2 text-center font-bold text-[#8d8d8d] text-[.75rem]"
          href={"/"}
        >
          Click here for Owner Login
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
