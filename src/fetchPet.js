const fetchPet = async ({ queryKey }) => {
  const id = queryKey[1];

  const apiRes = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);

  if (!apiRes.ok) {
    throw new Error(`details/${id} fetch not okay`);
  }

  return apiRes.json();
};

export default fetchPet;

//just a query key that gives you the response to an API
//   alway need to show an error message with react query
