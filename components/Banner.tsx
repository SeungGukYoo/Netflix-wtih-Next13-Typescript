import { Movie } from "@/typings";
import { useEffect, useState } from "react";

interface Props {
  original: Movie[];
}
function Banner({ original }: Props) {
  const [movie, setMovie] = useState<Movie | null>(null);
  console.log(movie);
  useEffect(() => {
    setMovie(original[Math.floor(Math.random() * original.length)]);
  }, [original]);

  return (
    <section>
      <div>banner</div>
    </section>
  );
}

export default Banner;
