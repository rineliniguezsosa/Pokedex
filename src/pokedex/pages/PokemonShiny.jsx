import { useParams } from "react-router-dom"
import { Pokemoncontainer, Spritescontainer } from "../../assets"
import { useDispatch,useSelector } from "react-redux"
import { useEffect } from "react"
import { fetchingpokemon } from "../../store"


export const PokemonShiny = () => {
  const { pokemonId } = useParams()
  const dispatch = useDispatch()
  const { infopokemon } = useSelector(state => state.pokemon)
  console.log(infopokemon)
  console.log(pokemonId)

  useEffect(() => {
    dispatch(fetchingpokemon(pokemonId))
  }, [])
  
  return (
    <Pokemoncontainer>
      <Spritescontainer>
          {infopokemon.map(pokemon=>(
            <>
              <span key={pokemon.id}>{pokemon.name}</span>
            </>
          ))}
      </Spritescontainer>
    </Pokemoncontainer>
  )
}
