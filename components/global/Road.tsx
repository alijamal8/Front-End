import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbPage,
  BreadcrumbList,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface BreadcrumbNavProps {
  items: { label: string; href?: string }[];
}

export function Road({ items }: BreadcrumbNavProps) {
  return (
    <Breadcrumb className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-2 dark:border-zinc-800 dark:bg-zinc-950/80">
      <BreadcrumbList className="gap-2 text-xs sm:text-sm">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <BreadcrumbItem key={`${item.label}-${index}`}>
              {isLast || !item.href ? (
                <BreadcrumbPage className="font-semibold text-zinc-900 dark:text-zinc-100">
                  {item.label}
                </BreadcrumbPage>
              ) : (
                <BreadcrumbLink asChild>
                  <Link href={item.href} className="font-medium text-zinc-600 dark:text-zinc-300">
                    {item.label}
                  </Link>
                </BreadcrumbLink>
              )}

              {!isLast && <BreadcrumbSeparator className="text-zinc-400 dark:text-zinc-500" />}
            </BreadcrumbItem>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
