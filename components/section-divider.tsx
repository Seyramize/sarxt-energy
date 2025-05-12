export function SectionDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`relative h-24 ${className}`}>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center">
              <div className="bg-white px-4">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <div className="h-3 w-3 rounded-full bg-primary"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
