export const SkeletonLoader = () => {
  return (
    <div className="flex justify-start mb-4">
      <div className="rounded-lg p-3 max-w-[70%] bg-gray-100">
        <div className="animate-pulse space-y-2">
          <div className="h-2 bg-gray-200 rounded w-3/4"></div>
          <div className="h-2 bg-gray-200 rounded w-1/2"></div>
        </div>
      </div>
    </div>
  );
};
