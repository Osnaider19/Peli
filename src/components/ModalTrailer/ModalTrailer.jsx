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
      <div className="modal-trailer">
        <button
          className="boton-cerrar-modal"
          onClick={() => {
            setPlay(false);
          }}
        ></button>
        {videos ? (
          <div className="relative w-full h-full md:w-[90%] md:h-[90%] flex items-center justify-center bg-black">
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
        ) : (
          <div className="px-4 md:px-4">
            <p className="text-white font-bold  uppercase text-center text-2xl md:text-5xl">
              Lo sentimos Trailer no disponible por el momento
            </p>
          </div>
        )}
      </div>
      {/*console.log(videos)*/}
      {/*console.log(allData)*/}
    </>
  );
}
