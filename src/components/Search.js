import React, {useEffect, useState} from "react";

function Search({searchPokemon}) {

  const [searchText, setSearchText] = useState("")

  function handleSearch(e){
    const newSearchText = e.target.value
    searchPokemon(newSearchText)
    setSearchText(newSearchText)
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input onChange={handleSearch} value={searchText} className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
