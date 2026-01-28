"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./Input";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(3, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  userType: z.enum(["client", "supplier"]),
});

type FormData = z.infer<typeof formSchema>;

export function Form() {
  const [userType, setUserType] = useState<"client" | "supplier">("client");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userType: "client",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log("FORM DATA:", data);
  };

  return (
    <div className="w-[45%]">
      {/* USER TYPE */}
      <div className="flex">
        <button
          type="button"
          className={`p-4 font-medium text-[1.25rem] ${
            userType === "client"
              ? "text-black bg-white"
              : "text-white bg-[#277FCD26]"
          }`}
          onClick={() => {
            setUserType("client");
            setValue("userType", "client");
          }}
        >
          I am a Client
        </button>

        <button
          type="button"
          className={`p-4 font-medium text-[1.25rem] ${
            userType === "supplier"
              ? "text-black bg-white"
              : "text-white bg-[#277FCD26]"
          }`}
          onClick={() => {
            setUserType("supplier");
            setValue("userType", "supplier");
          }}
        >
          I am a Supplier
        </button>
      </div>

      {/* FORM */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-6 p-6"
      >
        <div>
          <p className="text-[0.8rem] text-[#FF383C] font-[350]">
            Contact Us – {userType}
          </p>
          <p className="text-[2rem] text-white font-bold">Get In Touch</p>
        </div>

        <Input
          label="Full Name"
          placeholder="Your name..."
          error={errors.name?.message}
          {...register("name")}
        />

        <Input
          label="E-mail"
          placeholder="Your e-mail..."
          type="email"
          error={errors.email?.message}
          {...register("email")}
        />

        <Input
          label="Subject"
          placeholder="Title..."
          error={errors.subject?.message}
          {...register("subject")}
        />

        <Input
          label="Message"
          placeholder="Your message..."
          isTextArea
          error={errors.message?.message}
          {...register("message")}
        />

        <button
          disabled={isSubmitting}
          className="bg-white text-black py-3 font-semibold disabled:opacity-50 hover:cursor-pointer"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
