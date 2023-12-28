import Pet from "./Pet";

// component will take in props and destructure pets props

const Results = ({ pets }) => {
  return (
    <div className="search">
      {/* checs the length of pets - if nothing do a turinary */}
      {!pets.length ? (
        <h1> No Pets Found</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            animal={pet.aniaml}
            name={pet.name}
            breed={pet.breed}
            images={pet.images}
            location={`${pet.city}. ${pet.state}`}
            key={pet.id}
          />
        ))
      )}
    </div>
  );
};

export default Results;

{
  /* be explicit and tell what props the component expected from the API in pets.map */
}
