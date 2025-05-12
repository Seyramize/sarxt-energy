import { Skeleton } from "@/components/ui/skeleton"

export default function QuoteLoading() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Skeleton className="h-12 w-3/4 mx-auto mb-4" />
            <Skeleton className="h-6 w-2/3 mx-auto" />
          </div>

          <div className="bg-white rounded-xl shadow-xl p-6 sm:p-10">
            <div className="space-y-8">
              <div>
                <Skeleton className="h-8 w-1/3 mb-4" />
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                  {[...Array(5)].map((_, i) => (
                    <Skeleton key={i} className="h-24 w-full rounded-lg" />
                  ))}
                </div>
              </div>

              <div>
                <Skeleton className="h-8 w-1/3 mb-4" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Skeleton className="h-5 w-1/3 mb-2" />
                    <Skeleton className="h-10 w-full" />
                  </div>
                  <div>
                    <Skeleton className="h-5 w-1/3 mb-2" />
                    <Skeleton className="h-10 w-full" />
                  </div>
                  <div>
                    <Skeleton className="h-5 w-1/3 mb-2" />
                    <Skeleton className="h-10 w-full" />
                  </div>
                  <div>
                    <Skeleton className="h-5 w-1/3 mb-2" />
                    <Skeleton className="h-10 w-full" />
                  </div>
                </div>
              </div>

              <div>
                <Skeleton className="h-8 w-1/3 mb-4" />
                <Skeleton className="h-5 w-1/3 mb-2" />
                <Skeleton className="h-10 w-full mb-4" />
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <Skeleton className="h-5 w-1/3 mb-2" />
                    <Skeleton className="h-10 w-full" />
                  </div>
                  <div>
                    <Skeleton className="h-5 w-1/3 mb-2" />
                    <Skeleton className="h-10 w-full" />
                  </div>
                  <div>
                    <Skeleton className="h-5 w-1/3 mb-2" />
                    <Skeleton className="h-10 w-full" />
                  </div>
                </div>
              </div>

              <Skeleton className="h-12 w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
