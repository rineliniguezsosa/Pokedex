import { useParams } from "react-router-dom"
import { Pokemoncontainer, Spritescontainer } from "../../assets"
import { useDispatch,useSelector } from "react-redux"
import { useEffect } from "react"
import { fetchingpokemon } from "../../store"


export const PokemonShiny = () => {
  const { pokemonId } = useParams()
  const dispatch = useDispatch()
  const { pokemones } = useSelector(state => state.pokemon)
  console.log(pokemones)
  console.log(pokemonId)

  useEffect(() => {
    dispatch(fetchingpokemon(pokemonId))
  }, [])
  
  return (
    <Pokemoncontainer>
      <Spritescontainer>

      </Spritescontainer>
    </Pokemoncontainer>
  )
}
