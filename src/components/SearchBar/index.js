import react, {useState}  from "react";
import { getAccountInfo } from "../../utils/terra";

function SearchBar() {
    // Declare a new state variable, which we'll call "count"
    const [query, setQuery] = useState("");

    const search = () => {
        getAccountInfo(query)
    }
  
    return (
      <div>
          <p>Current Query {query}</p>
          <input onChange={(e) => setQuery(e.target.value)}></input>
          <button onClick={() =>  search()}>Search</button>
      </div>
    )
}

export default SearchBar