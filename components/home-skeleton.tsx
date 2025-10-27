"use client"

export default function HomeSkeleton() {
  return (
    <div className="animate-pulse">
      {/* Hero */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl space-y-4">
            <div className="h-10 w-3/4 bg-muted rounded" />
            <div className="h-6 w-2/3 bg-muted rounded" />
            <div className="h-12 w-1/2 bg-muted rounded" />
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="border rounded-lg p-4 space-y-3">
                <div className="h-40 bg-muted rounded" />
                <div className="h-6 bg-muted rounded w-2/3" />
                <div className="h-4 bg-muted rounded w-4/5" />
                <div className="h-8 bg-muted rounded w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
