/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Button } from "@/components/ui/button";
import { login } from "@/services/auth";
import { showErrorToast, showSuccessToast } from "@/utils/toastMessage";
import { Lock, Mail, Loader2, User } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { FieldValues, SubmitHandler, useForm, Controller } from "react-hook-form";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    startTransition(async () => {
      const response = await login(data);

      if (response.statusCode === 200) {
        showSuccessToast(response.message);
        form.reset();
        router.push("/dashboard");
      } else {
        showErrorToast(response.message);
      }
    });
    // Handle login logic here
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-white">
      <div className="flex flex-col items-center mb-8">
        <div className="bg-[#181C23] rounded-full w-20 h-20 flex items-center justify-center mb-4">
          <User className="text-white" size={48} />
        </div>
        <h2 className="text-2xl font-bold mb-6 text-black tracking-wide">LOGIN</h2>
      </div>
      <div className="w-full max-w-md flex flex-col items-center">
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 flex flex-col w-full"
        >
          <Controller
            name="email"
            control={form.control}
            render={({ field }) => (
              <div className="flex items-center bg-white rounded-md shadow p-3">
                <Mail className="text-gray-400 mr-2" />
                <input
                  {...field}
                  type="email"
                  placeholder="Email"
                  className="flex-1 outline-none bg-transparent text-gray-700 placeholder-gray-400"
                />
              </div>
            )}
          />
          <Controller
            name="password"
            control={form.control}
            render={({ field }) => (
              <div className="flex items-center bg-white rounded-md shadow p-3">
                <Lock className="text-gray-400 mr-2" />
                <input
                  {...field}
                  type="password"
                  placeholder="Password"
                  className="flex-1 outline-none bg-transparent text-gray-700 placeholder-gray-400"
                />
              </div>
            )}
          />
          <Button
            type="submit"
            disabled={isLoading}
            className="bg-[#C3920A] hover:bg-[#a87d08] text-white font-semibold py-2 rounded-md text-lg shadow-md transition-colors duration-200 w-full"
          >
            {isLoading ? (
              <>
                <Loader2 className="animate-spin mr-2" size={18} />
                Logging in...
              </>
            ) : (
              "Login"
            )}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;