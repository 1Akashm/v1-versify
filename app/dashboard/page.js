import React, { Children, Suspense } from "react";
import SignOutButton from "./sign-out-button";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";

async function DashboardContent() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="flex justify-between p-4">
      <h1>Welcome, {session.user.name ?? session.user.email}</h1>
      <SignOutButton />
    </div>
  );
}

const Dashboard = () => {
  return (
    <Suspense fallback={<div className="p-4">Loading...</div>}>
      <DashboardContent />
    </Suspense>
  );
};

export default Dashboard;
