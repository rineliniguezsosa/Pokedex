import { useParams } from "react-router-dom"
import { Pokemoncontainer, Spritescontainer } from "../../assets"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { fetchingpokemon } from "../../store"


export const PokemonShiny = () => {
  const { pokemonId } = useParams()
  const dispatch = useDispatch()
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
