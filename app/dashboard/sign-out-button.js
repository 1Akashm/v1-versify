"use client";

import React from "react";
import Buttons from "../components/Buttons";
import { useRouter } from "next/navigation";
import { signOut } from "@/lib/auth-client";

const SignOutButton = () => {
  const router = useRouter();

  async function handleSignOut() {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login");
          router.refresh(); // clears cached server components that used the old session
        },
      },
    });
  }

  return <button className="border-[1px] outline-0 p-2.5 cursor-pointer" type="button" onClick={handleSignOut}>logout</button>;
};

export default SignOutButton;
