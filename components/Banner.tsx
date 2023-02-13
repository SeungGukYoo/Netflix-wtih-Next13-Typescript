import { Movie } from "@/typings";
import { useEffect, useState } from "react";
import Image from "next/image";
import { baseUrl } from "@/constants/movie";

interface Props {
  original: Movie[];
}
function Banner({ original }: Props) {
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    setMovie(original[Math.floor(Math.random() * original.length)]);
  }, [original]);
  console.log(movie);
  return (
    <section>
      <div>
        <Image
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          alt={`${movie?.title}`}
          fill
          priority
          quality={50}
          className="object-cover"
        />
      </div>
    </section>
  );
}

export default Banner;
