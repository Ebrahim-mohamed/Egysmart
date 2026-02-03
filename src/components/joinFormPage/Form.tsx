"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../contact/Input";

/* ======================
   ZOD SCHEMA
====================== */
const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(11, "phone must be at least 3 characters"),
  position: z.string().min(3, "Position must be at least 3 characters"),
  userType: z.enum(["jop", "intern"]),
});

type FormData = z.infer<typeof formSchema>;

/* ======================
   FORM COMPONENT
====================== */
export function Form() {
  const [userType, setUserType] = useState<"intern" | "jop">("intern");
  const [status, setStatus] = useState<null | "success" | "error">(null);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: { userType: "intern" },
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:4002/api/join", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to submit form");

      setStatus("success");
      reset({ ...data }); // keep userType selected
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-[45%] max-[1100px]:w-[70%] max-[600px]:w-[90%]">
      {/* FORM */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-6 p-6"
      >
        <div>
          <p className="text-[0.8rem] text-[#FF383C] font-[350]">
            Join out team – {userType}
          </p>
          <p className="text-[2rem] text-white font-bold">Join us !</p>
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
          label="Phone number"
          placeholder="phone..."
          error={errors.phone?.message}
          {...register("phone")}
        />

        <Input
          label="Position"
          placeholder="Your position..."
          error={errors.position?.message}
          {...register("position")}
        />

        <div>
          <p className="text-white text-[1.2rem] font-normal mb-4">
            What are you applying for?
          </p>
          {/* User Type Toggle */}
          <div className="flex mb-4">
            <button
              type="button"
              className={`p-4 font-medium text-[1.25rem] flex-1 cursor-pointer ${
                userType === "intern"
                  ? "text-black bg-white"
                  : "text-white bg-[#277FCD26]"
              }`}
              onClick={() => {
                setUserType("intern");
                setValue("userType", "intern");
              }}
            >
              Internship program
            </button>

            <button
              type="button"
              className={`p-4 font-medium text-[1.25rem] flex-1 cursor-pointer ${
                userType === "jop"
                  ? "text-black bg-white"
                  : "text-white bg-[#277FCD26]"
              }`}
              onClick={() => {
                setUserType("jop");
                setValue("userType", "jop");
              }}
            >
              A jop
            </button>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-[#277FCD] text-white py-3 font-semibold disabled:opacity-50 cursor-pointer"
        >
          {loading ? "Submitting..." : "Send Message"}
        </button>

        {status === "success" && (
          <p className="text-green-400 mt-2">Application sent successfully!</p>
        )}
        {status === "error" && (
          <p className="text-red-500 mt-2">
            Something went wrong. Please try again.
          </p>
        )}
      </form>
    </div>
  );
}
