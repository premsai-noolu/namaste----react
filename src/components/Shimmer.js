import Shimmer2 from "./shimmer2";
const Shimmer = () => {
  return (
    <div className="flex flex-wrap">
      {/* <div className="m-[20px] w-[210px] h-[300px] animate-pulse bg-gray-100"></div>
      <div className="m-5 w-[100px] h-[100px] bg-gray-100 animate-pulse rounded-full"></div>
      <div className="m-[20px] w-[210px] h-[300px] bg-gray-100"></div>
      <div className="m-[20px] w-[210px] h-[300px] bg-gray-100"></div>
      <div className="m-[20px] w-[210px] h-[300px] bg-gray-100"></div>
      <div className="m-[20px] w-[210px] h-[300px] bg-gray-100"></div>
      <div className="m-[20px] w-[210px] h-[300px] bg-gray-100"></div>
      <div className="m-[20px] w-[210px] h-[300px] bg-gray-100"></div>
      <div className="m-[20px] w-[210px] h-[300px] bg-gray-100"></div>
      <div className="m-[20px] w-[210px] h-[300px] bg-gray-100"></div>
      <div className="m-[20px] w-[210px] h-[300px] bg-gray-100"></div>
      <div className="m-[20px] w-[210px] h-[300px] bg-gray-100"></div>
      <div className="m-[20px] w-[210px] h-[300px] bg-gray-100"></div> */}
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="m-[20px] w-[210px] h-[300px] bg-gray-100 animate-pulse"
        ></div>
      ))}
    </div>
  );
};

export default Shimmer;
