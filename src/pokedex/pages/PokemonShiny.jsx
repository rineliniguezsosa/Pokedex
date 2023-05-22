import { useParams } from "react-router-dom"
import { Pokemoncontainer } from "../../assets"


export const PokemonShiny = () => {
  const { pokemonId } = useParams()
  console.log(pokemonId)
  return (
    <Pokemoncontainer>Pokemoninfo</Pokemoncontainer>
  )
}
