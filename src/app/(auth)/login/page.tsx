'use client'
import LoginForm from "../_components/LoginForm";
import logo from "../../../../public/barishal-times-logo.png";
import Image from "next/image";
import { Suspense } from "react";

const Login = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100 ">
      <div className="max-w-lg shadow-md rounded-md bg-white pt-5">
        <div className="p-4 rounded-t-md flex flex-col gap-10 items-center justify-center">
          <Image
            src={logo || "/placeholder.svg"}
            width={200}
            height={60}
            alt="Barishal Times"
          />
          <h1 className="text-2xl font-bold text-center text-gray-600">
            Login As Admin
          </h1>
        </div>

        <div className="w-md mx-auto p-4 rounded-md flex items-center justify-center">
          <Suspense
            fallback={
              <div className="w-full h-10 bg-gray-200 animate-pulse rounded-md" />
            }
          >
            <LoginForm />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Login;
