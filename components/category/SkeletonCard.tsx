import { Skeleton } from "@/components/ui/skeleton";
export function SkeletonCard() {
  return (
    <>
      <div className="flex justify-center space-y-8 mt-30 space-x-10">
        <Skeleton className="h-[250px] w-[300px] rounded-xl" />
        <Skeleton className="h-[250px] w-[300px] rounded-xl" />
      </div>
      <div className="flex justify-center space-x-10 space-y-3">
        <Skeleton className="h-[250px] w-[300px] rounded-xl " />
        <Skeleton className="h-[250px] w-[300px] rounded-xl " />
      </div>
    </>
  );
}
