import { Movie } from "@/typings";
import Image from "next/image";
import { baseUrl } from "@/constants/movie";
import { useRecoilState } from "recoil";
import { modalState, movieState } from "@/atoms/globalAtom";
import { useCallback } from "react";

interface Props {
  movie: Movie;
}
function Thumbnail({ movie }: Props) {
  const [show, setShow] = useRecoilState(modalState);
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState);
  const modalHandler = useCallback(() => {
    setShow(true);
    setCurrentMovie(movie);
  }, []);
  return (
    <div
      onClick={modalHandler}
      className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:min-w-[260px] md:hover:scale-105"
    >
      <Image
        src={`${baseUrl}/w500${movie.backdrop_path || movie.poster_path}`}
        alt={`${movie.title}`}
        fill
        blurDataURL={`${baseUrl}/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        placeholder="blur"
        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        className="rounded-sm object-cover  md:rounded"
      />
    </div>
  );
}

export default Thumbnail;
