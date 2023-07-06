import { URL } from "../../config/config";
import { getVideos } from "../DetailsMovies/getVideos";
import YouTube from "react-youtube";

export default function ModalTrailerSeries({ id, setPlay }) {
  const Url = `${URL}/tv/${id}/videos`;
  const { videos , allData} = getVideos(Url);

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
          <div className="relative w-full h-full flex items-center justify-center">
            <YouTube
              videoId={videos.key}
              className="relative w-[90%] h-[90%]"
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
      {console.log(videos)}
      {console.log(allData)}
    </>
  );
}
