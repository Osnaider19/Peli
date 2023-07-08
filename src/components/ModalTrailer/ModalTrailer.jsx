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
        ""
      )}
      {/*console.log(videos)*/}
      {/*console.log(allData)*/}
    </>
  );
}
