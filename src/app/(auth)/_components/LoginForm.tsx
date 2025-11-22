"use client";

import { FormFieldIcon } from "@/components/shared/form-inputs/FormIconInput";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
// import { login } from "@/services/auth";
import { Lock, Mail, Loader2 } from "lucide-react";
import Link from "next/link";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
// import { useRouter, useSearchParams } from "next/navigation";
// import { toast } from "sonner";
import { useState, useTransition } from "react";

const LoginForm = () => {
  // const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isLoading, setIsLoading] = useState(false);
  // const searchParams = useSearchParams();
  // const redirect = searchParams.get("redirect");

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);
    // const response = await login(data);

    // if (response.success) {
    //   toast.success(response.message);
    //   setIsLoading(false);
    //   if (redirect) {
    //     startTransition(() => router.push(redirect));
    //   } else {
    //     startTransition(() => router.push("/dashboard"));
    //   }
    // } else {
    //   setIsLoading(false);
    //   toast.error(response.message);
    // }
  };

  return (
    <>
      {isPending && (
        <div className="fixed inset-0 bg-white bg-opacity-80 flex items-center justify-center z-50">
          <Loader2 className="animate-spin text-gray-600" size={40} />
        </div>
      )}

      <div className="w-full p-4 rounded-md">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 flex flex-col"
          >
            <FormFieldIcon
              icon={<Mail />}
              name="email"
              type="email"
              placeholder="Enter email"
            />

            <FormFieldIcon
              icon={<Lock />}
              name="password"
              type="password"
              placeholder="Enter password"
            />

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-1">
                <input type="checkbox" id="remember" name="remember" />
                <label htmlFor="remember">Remember me</label>
              </div>
              <div>
                <Link href="/forgot-password">Forget password?</Link>
              </div>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="bg-brand hover:bg-brand/90 cursor-pointer"
            >
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin mr-2" size={18} />{" "}
                  Submitting...
                </>
              ) : (
                "Submit"
              )}
            </Button>
          </form>
        </Form>
      </div>
    </>
  );
};

export default LoginForm;
