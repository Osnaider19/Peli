function Loader() {
    return (
        <div className="flex gap-4 py-6 w-full h-[100vh]">
          <div className="w-[340px] rounded-lg h-[510px] loader-animation"></div>
          <div>
            <div className="h-12 mt-3 w-[400px] rounded-lg loader-animation"></div>
            <div className="h-5 mt-5 w-[300px] rounded-lg loader-animation"></div>
            <div className="h-3 mt-5 w-[100px] rounded-lg loader-animation"></div>
            <div className="h-6 mt-5 w-[300px] rounded-lg loader-animation"></div>
            <div className="h-28 mt-4 w-[800px] rounded-lg loader-animation"></div>
            <div className="h-6 mt-5 w-[300px] rounded-lg loader-animation"></div>
            <div className="h-10 mt-5 w-[90px] rounded-lg loader-animation"></div>
          </div>
        </div>
    );
}

export default Loader;