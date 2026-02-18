export default function OrdersSkeleton() {
  return (
    <div className="space-y-4">
      {Array.from({ length: 5 }).map((_, index) => (
        <article
          key={index}
          className="animate-pulse rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-5"
        >
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div className="space-y-2">
              <div className="h-5 w-28 rounded bg-muted" />
              <div className="h-4 w-24 rounded bg-muted" />
            </div>
            <div className="h-6 w-20 rounded-full bg-muted" />
          </div>
          <div className="mt-4 border-t border-border pt-4">
            <div className="h-4 w-36 rounded bg-muted" />
          </div>
        </article>
      ))}
    </div>
  );
}
