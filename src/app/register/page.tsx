import RegisterForm from "../ui/register-form";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register",
};

export default function RegisterPage() {
  return (
    <main className='flex h-full items-center justify-center'>
      <div className='relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32'>
        <RegisterForm />
      </div>
    </main>
  );
}
