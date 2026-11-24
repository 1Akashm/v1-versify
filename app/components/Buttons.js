import Link from "next/link";
import React from "react";

const Buttons = ({ label, type = "button" }) => {
  return (
    <Link href={label}>
      <button className="border-[1px] outline-0 p-2.5 cursor-pointer" type={type}>
        {label}
      </button>
    </Link>
  );
};

export default Buttons;
