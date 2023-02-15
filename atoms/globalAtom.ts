import { atom } from "recoil";
import { Movie } from "@/typings";

export const modalState = atom({
  key: "modalState",
  default: false,
});

export const MovieState = atom<Movie | null>({
  key: "movieState",
  default: null,
});
