import YouTube from "react-youtube";
import { getVideos } from "../../hooks/getVideos";
import { URL } from "../../config/config";
import "./index.css";
import { LoaderTrailer } from "../Loaders/loaderTrailer";
export default function ModalTrailer({ type, id, setPlay }) {
  const { videos, allData, loader, error } = getVideos(
    `${URL}/${type}/${id}/videos`
  );

  return (
    <>
      
      {videos ? (
        <div className="modal-trailer">
          <button
            className="boton-cerrar-modal"
            onClick={() => {
              setPlay(false);
            }}
          ></button>
          
          <div className="relative w-[90%] h-[90%] flex items-center justify-center bg-black">
          {loader && <LoaderTrailer />} 
            <YouTube
              videoId={videos.key}
              className="relative w-[100%] h-[90%]"
              opts={{
                width: "100%",
                height: "100%",
                playerVars: {
                  autoplay: 1,
                  controls: 1,
                },
              }}
            />
          </div>
        </div>
      ) : (
        /*<div className="fixed  top-[80px] h-full w-full z-[9999999] left-0 ">
          <div className="w-[300px] flex bg-white shadow-lg rounded-lg">
            <div className="icon bg-red-600 flex justify-center items-center py-4 px-6 rounded-tr-3xl rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 bg-white rounded-full text-red-600 p-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <div className="flex flex-col p-4 rounded-tr-lg rounded-br-lg">
              <h2 className="font-semibold text-red-600">Error</h2>
              <p className="text-gray-700">No hay trailer disponible</p>
            </div>
          </div>
        </div>
        */
        ""
      )}
      {console.log(videos)}
      {console.log(allData)}
    </>
  );
}
