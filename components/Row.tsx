import { Movie } from "@/typings";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Thumbnail from "@/components/thumbnail";

function Row({ title, movies }: Props) {
  return (
    <article className="space-y-0.5 mb- md:space-y-2 md:pb-[30px] relative z-20">
      <h2 className="w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl">
        {title}
      </h2>
      <div className="group relative md:-ml-2">
        <FaAngleLeft className="absolute top-0 bottom-0 left-2 z-40 m-auto h-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 " />
        <div className="flex items-center space-x-0.5 overflow-x-scroll md:space-x-2.5 md:p-2">
          {movies.map((movie) => (
            <Thumbnail movie={movie} key={movie.id} />
          ))}
        </div>
        <FaAngleRight className="absolute top-0 bottom-0 right-2 z-40 m-auto h-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100" />
      </div>
    </article>
  );
}
interface Props {
  title: string;
  movies: Movie[];
}

export default Row;
