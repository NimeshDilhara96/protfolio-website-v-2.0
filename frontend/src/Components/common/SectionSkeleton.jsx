import React from 'react';

export default function SectionSkeleton({ height = 'h-96' }) {
  return (
    <section className={`w-full ${height} bg-background py-20 border-t border-text-primary/5 flex flex-col justify-center`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="animate-pulse flex flex-col gap-8">
          {/* Header Skeleton */}
          <div className="flex flex-col gap-4">
            <div className="h-6 w-32 bg-surface rounded-full"></div>
            <div className="h-12 w-3/4 max-w-md bg-surface/80 rounded-xl"></div>
          </div>
          
          {/* Content Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="h-64 bg-surface/60 rounded-2xl"></div>
            <div className="h-64 bg-surface/60 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
