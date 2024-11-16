"use client";
import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { registerFormSchema } from "@/utils/register-validator";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, Phone, User, Key } from "lucide-react";
import Link from "next/link";
import { registerUser } from "@/actions/user";

import { useRouter } from "next/navigation";

function SignUpPage() {
  const [message, setMessage] = useState<string>("");
  const router = useRouter();

  const form = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      fullname: "",
      email: "",
      password: "",
      phone: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof registerFormSchema>) => {
    const formdata = new FormData();
    formdata.append("fullname", data.fullname);
    formdata.append("email", data.email);
    formdata.append("phone", data.phone);
    formdata.append("password", data.password);
    const response = await registerUser(formdata);

    if (response.success === false) {
      setMessage(response.error || "Registration failed. Please try again.");
    } else {
      setMessage(
        response.message || "Registration successful! Redirecting to login..."
      );

      router.push("/login");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4 py-8">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6">
          Register to Get Started
        </h2>
        {message && (
          <p className="text-center mb-4 text-red-500 font-medium">{message}</p>
        )}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="fullname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <div className="flex items-center space-x-2 border rounded-md px-3 py-2">
                      <User className="text-gray-400" />
                      <Input
                        className="border-none focus:outline-none w-full"
                        placeholder="Fullname"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormDescription>Enter your full name.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <div className="flex items-center space-x-2 border rounded-md px-3 py-2">
                      <Mail className="text-gray-400" />
                      <Input
                        className="border-none focus:ring-0 focus:outline-none w-full"
                        placeholder="you@example.com"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormDescription>Your active email address.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <div className="flex items-center space-x-2 border rounded-md px-3 py-2">
                      <Phone className="text-gray-400" />
                      <Input
                        className="border-none focus:ring-0 focus:outline-none w-full"
                        placeholder="1234567890"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormDescription>Your phone number.</FormDescription>
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
                    <div className="flex items-center space-x-2 border rounded-md px-3 py-2">
                      <Key className="text-gray-400" />
                      <Input
                        className="border-none focus:ring-0 focus:outline-none w-full"
                        placeholder="********"
                        type="password"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormDescription>Choose a strong password.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="text-white font-semibold py-2 px-4 rounded-md transition-colors"
            >
              Submit
            </Button>
            <Link
              className="text-sm block hover:underline hover:text-blue-300"
              href={"/login"}
            >
              Already have an account? Click here to login
            </Link>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default SignUpPage;
