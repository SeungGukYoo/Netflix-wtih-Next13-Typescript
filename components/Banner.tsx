import { Movie } from "@/typings";
import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { baseUrl } from "@/constants/movie";
import { FaPlay, FaInfoCircle } from "react-icons/fa";
import { useRecoilState } from "recoil";
import { modalState, movieState } from "@/atoms/globalAtom";

interface Props {
  original: Movie[];
}
function Banner({ original }: Props) {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [show, setShow] = useRecoilState(modalState);
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState);
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    setMovie(original[Math.floor(Math.random() * original.length)]);
  }, [original]);
  const modalHandler = useCallback(() => {
    setShow(true);
    setCurrentMovie(movie);
  }, [movie]);

  return (
    <section className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
      <div className="absolute top-0 left-0 z-[1] h-[95vh] w-[100%]">
        <Image
          src={`${baseUrl}original/${
            movie?.backdrop_path || movie?.poster_path
          }`}
          alt={`${movie?.title}`}
          fill
          quality={50}
          className="object-cover"
          onLoadingComplete={() => ref.current?.remove()}
        />
        <div className="loadingBar animate-ani-rotation" ref={ref}></div>
        <div className="absolute top-0 left-0 z-5 w-full h-full bg-gradient1"></div>
      </div>
      <h1 className="relative z-10 text-2xl font-bold drop-shadow md:text-4xl lg:text-7xl">
        {movie?.title || movie?.name || movie?.original_title}
      </h1>
      <p className="relative z-10 text-xs max-w-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
        {movie?.overview}
      </p>
      <div className="flex space-x-3 z-10 relative">
        <button className="bannerButton bg-white text-black">
          <FaPlay className="w-4 text-black md:w-7" />
          Play
        </button>
        <button
          onClick={modalHandler}
          className="bannerButton bg-[gray]/70 text-black"
        >
          <FaInfoCircle className="w-5 md:w-8" />
          More Info
        </button>
      </div>
    </section>
  );
}

export default Banner;
