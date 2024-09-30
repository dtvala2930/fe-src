"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import type React from "react";
import { type DefaultValues, useForm } from "react-hook-form";
import { z } from "zod";
import { Form, type FormField } from "../base";

const createSchema = (schemaDefinition: z.ZodRawShape) => z.object(schemaDefinition);

export default function CustomForm<T extends z.ZodRawShape>({
  children,
  schemaDefinition,
  defaultValues,
  className = "",
}: {
  children: React.ReactElement<typeof FormField>[];
  schemaDefinition: T;
  defaultValues: DefaultValues<z.infer<z.ZodObject<T>>>;
  className?: string;
}) {
  const formSchema = createSchema(schemaDefinition);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { ...defaultValues },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // biome-ignore lint/suspicious/noConsoleLog: <explanation>
    console.log(values);
  }

  return (
    <Form {...form}>
      <form className={className} onSubmit={form.handleSubmit(onSubmit)}>
        {children}
      </form>
    </Form>
  );
}
