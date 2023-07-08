import { getActor } from "./getActor";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
export function Redes({ id }) {
  const { actor } = getActor(
    `https://api.themoviedb.org/3/person/${id}/external_ids`
  );

  return (
    <div>
      <div className="flex py-4 gap-5">
        {actor.instagram_id ? (
          <a
            href={`https://www.instagram.com/${actor.instagram_id}`}
            target="_blank"
          >
            <i className="text-2xl hover:text-red-600 transition-colors duration-100">
              <BsInstagram />
            </i>
          </a>
        ) : (
          ""
        )}

        {actor.tiktok_id ? (
          <a
            href={`https://www.tiktok.com/@${actor.tiktok_id}`}
            target="_blank"
          >
            <i className="text-2xl  hover:text-black transition-colors duration-100">
              <FaTiktok />
            </i>
          </a>
        ) : (
          ""
        )}

        {actor.twitter_id ? (
          <a href={`https://twitter.com/${actor.twitter_id}`} target="_blank">
            <i className="text-2xl  hover:text-blue-600 transition-colors duration-100">
              <BsTwitter />
            </i>
          </a>
        ) : (
          ""
        )}
      </div>
      {/*console.log(actor)*/}
    </div>
  );
}
