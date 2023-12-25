import { useState } from "react";

const SearchParams = () => {
  const [location, setLocation] = useState("");
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            onChange={(e) => setLocation(e.target.value)}
            id="locatoin"
            value={location}
            placeholder="location"
          />
        </label>
        <button> submit </button>
      </form>
    </div>
  );
};

export default SearchParams;
