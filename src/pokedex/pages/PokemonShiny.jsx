import { useParams } from "react-router-dom"
import { Pokemoncontainer, Spritescontainer } from "../../assets"
import { useDispatch } from "react-redux"
import { useEffect } from "react"


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
