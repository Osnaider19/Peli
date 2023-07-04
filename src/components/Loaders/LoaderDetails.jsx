export default function LoaderDetails() {
  return (
    <div className="relative top-[80px] w-[95%] m-auto">
      <div className="relative flex gap-4  w-full ">
        <div className="relative flex flex-col md:flex-row w-full md:gap-3">
          <div className="h-[300px] w-[250px]  md:min-w-[340px]  md:min-h-[510px] rounded-lg loader-animation"></div>
          <div className="md:w-full">
            <div className="h-7 mt-2 md:h-12 md:mt-3 w-[400px] rounded-lg loader-animation"></div>
            <div className="h-5 mt-2 md:mt-5 w-[300px] rounded-lg loader-animation"></div>
            <div className="h-7 mt-2 md:mt-5 w-[100px] rounded-lg loader-animation"></div>
            <div className="h-6 mt-2 md:mt-5 w-[300px] rounded-lg loader-animation"></div>
            <div className="h-28 mt-2 md:mt-4 w-[95%]  md:w-[80%] rounded-lg loader-animation"></div>
            <div className="h-6  mt-1 md:mt-5 w-[300px] rounded-lg loader-animation"></div>
            <div className="h-10 mt-1 md:mt-5 w-[90px] rounded-lg loader-animation"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
