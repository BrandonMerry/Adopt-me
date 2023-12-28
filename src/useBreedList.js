import { useState, useEffect } from "react";

// THIS IS A CUSTOM HOOK (OTHER HOOKS PACKAGED TOGETHER)
// HOOKS ARE 'useState" &

// local cache because the breed probably hasnt updated in 13s
// basically stores values in browser
const localCache = {};

// this is  function to request a new breedlist when an aniaml is selected

export default function useBreedList(animal) {
  // breedlist is not pupulated to start
  const [breedList, setBreedList] = useState([]);
  // status is not unloaded to start
  const [status, setStatus] = useState("unloaded");

  useEffect(() => {
    // if no(!) animal, breedlist is empty[]
    if (!animal) {
      setBreedList([]);
    }
    // or if there check the local cache for the animal and populate
    else if (localCache[animal]) {
      setBreedList(localCache[animal]);
    }
    // or return the breed list
    else {
      requestBreedList();
    }

    // asyn funtion tells the status and if the list is loading

    async function requestBreedList() {
      setBreedList([]);
      setStatus("loading");
      // await and feth data form this api
      const res = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
      );
      const json = await res.json();
      //   load local cache or load nothing
      localCache[animal] = json.breeds || [];
      setBreedList(localCache[animal]);
      setStatus("loaded");
    }
  }, [animal]);

  return [breedList, status];
}
