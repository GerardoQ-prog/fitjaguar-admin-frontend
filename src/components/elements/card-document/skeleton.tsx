const SkeletonCardDocument = () => {
  return (
    <div className="animate-pulse bg-black-300 max-w-[300px] w-full p-4 rounded-lg">
      <div className="bg-gray-200 rounded-xl w-full h-[150px] mb-3"></div>
      <p className="h-2.5 bg-gray-200 rounded-full w-32 mb-2"></p>
      <p className="h-2.5 bg-gray-200 rounded-full w-32"></p>
    </div>
  );
};

export default SkeletonCardDocument;
