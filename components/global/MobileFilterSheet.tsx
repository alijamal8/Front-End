"use client";

import { ReactNode } from "react";
import { SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

type MobileFilterSheetProps = {
  title: string;
  children: ReactNode;
};

export default function MobileFilterSheet({
  title,
  children,
}: MobileFilterSheetProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="secondary" className="gap-2">
          <SlidersHorizontal className="h-4 w-4" />
          {title}
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[85vw] max-w-[380px] p-0">
        <SheetHeader className="border-b px-4 py-3">
          <SheetTitle>{title}</SheetTitle>
        </SheetHeader>
        <div className="h-[calc(100vh-57px)] overflow-y-auto p-4">{children}</div>
      </SheetContent>
    </Sheet>
  );
}
