import React from "react";
import AdminNav from "@/components/admin/AdminNav";
import { Separator } from "@/components/ui/separator";

function SalesPage() {
  return (
    <div className="min-w-[84vw] m-auto">
      <AdminNav from="Products Sales" />
      <Separator className="mb-4 " />
    </div>
  );
}

export default SalesPage;
