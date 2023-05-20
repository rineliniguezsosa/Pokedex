import { useParams } from "react-router-dom"


export const PokemonShiny = () => {
  const { pokemonId } = useParams()
  console.log(pokemonId)
  return (
    <div>Pokemoninfo</div>
  )
}
