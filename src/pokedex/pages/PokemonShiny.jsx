import { useParams } from "react-router-dom"
import { Pokemoncontainer, Spritescontainer } from "../../assets"


export const PokemonShiny = () => {
  const { pokemonId } = useParams()
  console.log(pokemonId)
  return (
    <Pokemoncontainer>
      <Spritescontainer>
        
      </Spritescontainer>
    </Pokemoncontainer>
  )
}
