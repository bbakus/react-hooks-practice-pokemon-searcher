import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [pokemon, setPokemon] = useState([])
  const [ogPokemon, setOgPokemon] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
    .then(response => response.json())
    .then(data => {
      setPokemon(data)
      setOgPokemon(data)
    })
  }, [])
 
  function addPokemon(newPokemon){
    setPokemon([...pokemon, newPokemon])
  }

  function searchPokemon(searchText){

    if(searchText == ""){
      setPokemon(ogPokemon)
    }
    else{
    const filteredPokemon = ogPokemon.filter(poke => {
      return poke.name.toUpperCase().includes(searchText.toUpperCase())
    })
    setPokemon(filteredPokemon)
    }
    
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addPokemon={addPokemon}/>
      <br />
      <Search searchPokemon={searchPokemon}/>
      <br />
      <PokemonCollection pokemon={pokemon}/>
    </Container>
  );
}

export default PokemonPage;
