import { useQuery } from "@tanstack/react-query";
import fetchBreedList from "./fetchBreedList";
// custom hook was deleted and replaced iwth fetch breedlist

export default function useBreedList(animal) {
  const results = useQuery(["breeds", animal], fetchBreedList);
  return [results?.data?.breeds ?? [], results.status];
}
