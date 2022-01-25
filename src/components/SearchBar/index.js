import React, { useState } from 'react'
import { getAccountInfo } from '../../utils/terra'

function SearchBar() {
  // Declare a new state variable, which we'll call "count"
  const [query, setQuery] = useState(
    'terra1rsgr6xstzcyf9ce4sevmnxup7sxwlmmt8eqc42',
  )

  const search = () => {
    getAccountInfo(query)
  }

  return (
    <div>
      <p>Current Query {query}</p>
      <input onChange={(e) => setQuery(e.target.value)}></input>
      <button type="button" onClick={() => search()}>
        Search
      </button>
    </div>
  )
}

export default SearchBar
