const SkeletonCardCoach = () => {
  return (
    <div className="animate-pulse bg-black-300 max-w-[200px] w-full p-4 rounded-lg flex justify-center flex-col items-center gap-3 py-10">
      <div className="rounded-full h-[100px] w-[100px] bg-gray-200 mb-10"></div>
      <div>
        <p className="h-2.5 bg-gray-200 rounded-full w-32"></p>
        <p className="h-2.5 bg-gray-200 rounded-full w-full mt-3"></p>
      </div>
    </div>
  );
};

export default SkeletonCardCoach;
