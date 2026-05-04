"use client";
import { Button } from "@/components/ui/button";
import { login } from "@/services/auth";
import { showErrorToast, showSuccessToast } from "@/utils/toastMessage";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const LoginForm = () => {
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
  };

  return (
    <div className="min-h-screen w-full bg-slate-100 px-4 py-8 sm:px-6">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-md items-center">
        <div className="w-full rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="mb-6 text-center">
            <h1 className="text-2xl font-semibold text-slate-900">HR Management Login</h1>
            <p className="mt-1 text-sm text-slate-500">
              Sign in to access your HR dashboard.
            </p>
          </div>

          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4"
          >
            <div className="space-y-1.5">
              <label htmlFor="email" className="text-sm font-medium text-slate-700">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@company.com"
                autoComplete="email"
                className="h-11 w-full rounded-md border border-slate-300 px-3 text-sm text-slate-900 outline-none transition focus:border-slate-500"
                {...form.register("email", { required: true })}
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="password" className="text-sm font-medium text-slate-700">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                autoComplete="current-password"
                className="h-11 w-full rounded-md border border-slate-300 px-3 text-sm text-slate-900 outline-none transition focus:border-slate-500"
                {...form.register("password", { required: true })}
              />
            </div>

            <Button
              type="submit"
              disabled={isPending}
              className="h-11 w-full bg-slate-900 text-sm font-medium text-white hover:bg-slate-800"
            >
              {isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Signing in...
                </>
              ) : (
                "Sign in"
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;