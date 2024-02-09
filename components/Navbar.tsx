import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-2">
      <div className="flex items-center gap-[1ch]">

      <span className="text-lg font-bold tracking-widest">Leonard Schummer</span>
      </div>
      <div className="flex gap-12 text-md text-zinc-400">
        <Link href="#" className="text-black font-medium">
          Home
        </Link>
        <Link href="#">Projects</Link>
        <Link href="#">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
