import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({addPokemon}) {

  const[name, setName] = useState("")
  const[hp, setHp] = useState(0)
  const[frontImage, setFrontImage] = useState("")
  const [backImage, setBackImage] = useState("")

  function handleSubmit(e){

    e.preventDefault()

    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        hp: hp,
        sprites:{
          front: frontImage,
          back: backImage,
        }
      })
      
    })
    .then(response => response.json())
    .then(data => {
      addPokemon(data)
      setName("")
      setHp(0)
      setFrontImage("")
      setBackImage("")
    })
  }


  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input onChange={(e) => setName(e.target.value)} value={name}fluid label="Name" placeholder="Name" name="name" />
          <Form.Input onChange={(e) => setHp(e.target.value)} value={hp}fluid label="hp" placeholder="hp" name="hp" />
          <Form.Input
          onChange={(e) => setFrontImage(e.target.value)}
            value={frontImage}
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
          />
          <Form.Input
            onChange={(e) => setBackImage(e.target.value)}
            value={backImage}
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
