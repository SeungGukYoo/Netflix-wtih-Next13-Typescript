import React, { useRef } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { modalState, movieState } from "@/atoms/globalAtom";
import Image from "next/image";
import { baseUrl } from "@/constants/movie";

function Modal() {
  const [close, setClose] = useRecoilState(modalState);
  const ref = useRef<HTMLDivElement | null>(null);
  const movie = useRecoilValue(movieState);

  const modalHandler = () => {
    setClose(false);
  };

  return (
    <aside className="fixed w-full h-screen top-0 left-0 z-50 bg-[rgba(0,0,0,0.9)] p-10 flex items-center justify-center">
      <article className="w-full h-[70%] flex justify-between flex-wrap">
        <div className="relative overflow-hidden w-full h-[80%] sm:w-[40%] sm:h-[full]">
          <Image
            src={`${baseUrl}w780${movie?.poster_path}`}
            fill
            alt={`${movie?.title}`}
            className="object-contain"
            onLoadingComplete={() => ref.current?.remove()}
          />
          <div ref={ref} className="loadingBar animate-ani-rotation"></div>
        </div>
        <div className="flex content-center w-full h-[40%] flex-wrap sm:w-[55%] sm:h-full">
          <h2 className="w-full text-[30px] mb-[20px]">{movie?.title}</h2>
          <p className="w-full mb-2">작품명: {movie?.original_title}</p>
          <p className="w-full mb-2">개봉일: {movie?.release_date}</p>
          <p className="w-full mb-2">평점: {movie?.vote_average}/10</p>
          <p className="w-full text-[12px] text-[#aaa]">{movie?.overview}</p>
        </div>
      </article>
      <span
        onClick={modalHandler}
        className="absolute top-10 right-10 text-[16px] cursor-pointer font-bold"
      >
        close
      </span>
    </aside>
  );
}

export default Modal;
