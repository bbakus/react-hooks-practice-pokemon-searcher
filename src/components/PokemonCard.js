import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {

  const [cardFlip, setCardFlip] = useState(false)

  return (  
    <Card>
      
      <div>
        <div onClick={() => setCardFlip(!cardFlip)} className="image">
          <img alt={pokemon.name} src={cardFlip ? pokemon.sprites.back : pokemon.sprites.front}/>
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp}
          </span>
        </div>
      </div>
      
    </Card>
  );
}

export default PokemonCard;
