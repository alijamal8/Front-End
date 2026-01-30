
import React from "react";
import Account from "../navbar/Account";
import { ModeToggle } from "../global/ModeToggle";
import { Home, Plus } from "lucide-react";
import Link from "next/link";

function AdminNav({ from }: { from: string }) {
  return (
    <>
      <div className="ml-24 py-4  flex justify-between items-center">
        <h1 className="text-2xl font-bold capitalize">{from}</h1>
        <div className="flex items-center gap-2">
          <Link href="/admin/products/create">
            <Plus className="cursor-pointer" />
          </Link>
          <ModeToggle />
          <Link href="/">
            <Home size={20} className="cursor-pointer" />
          </Link>
          <Account />
        </div>
      </div>
    </>
  );
}

export default AdminNav;
