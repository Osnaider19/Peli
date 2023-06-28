
import { URL } from "../../config/config";
import { getVideos } from "./getVideos";

export default function ModalTrailer(props) {
  
  const Url = URL + `movie/${props.id}/videos`;
  const {videos} = getVideos(Url)
  return (
    <>
      <div>hola</div>
      {console.log(videos)}
    </>
  );
}
