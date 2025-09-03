export const SkeletonLoader = () => {
  return (
    <div className="message-wrapper mb-4 flex">
      <div className="message-bubble max-w-[100%] rounded-lg bg-gray-100 p-3">
        <div className="animate-pulse space-y-3">
          <div className="h-4 w-[280px] rounded-md bg-gray-200"></div>
          <div className="h-4 w-[220px] rounded-md bg-gray-200"></div>
          <div className="h-4 w-[180px] rounded-md bg-gray-200"></div>
        </div>
      </div>
    </div>
  );
};
