import { useSelector } from "react-redux"


export const Searchpokemonlist = () => {
  const { infopokemon } = useSelector(state => state.pokemon)
  return (
    <div>Searchpokemonlist</div>
  )
}
