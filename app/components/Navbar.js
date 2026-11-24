import React from "react";
import Buttons from "./Buttons";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between p-4 items-center">
      <Link href="/">
        <h1 className="bold capitalize text-2xl">Versify</h1>
      </Link>
      <div className="flex gap-2">
        <Buttons label="login" type="button" />

        <Buttons label="signup" type="button" />
      </div>
    </div>
  );
};

export default Navbar;
