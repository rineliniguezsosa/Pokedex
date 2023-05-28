import { useSelector,useDispatch } from "react-redux"
import { Pokemoncontainer,Pokedextitle,Pokedexcontainer,Childcontainer,Formbox,Form,Inputform,Botones,Buttoncuadricula,Buttoncontainer,Btnpage   } from "../../assets"
import { useForm } from "../../hooks"
import { useState,useEffect } from "react"
import { startfetchingpokemonlist } from "../../store"
import { PokemonList } from "../components/PokemonList"
import { Searchpokemonlist } from "../components/Searchpokemonlist"


export const Pokemon = () => {
  const { mypokemon,onInputchange,onSubmitform } = useForm({pokemon:''})
  const { infopokemon } = useSelector(state => state.pokemon)
  const dispatch = useDispatch()

  const [page,setPage] = useState(0)

  useEffect(() => {
    dispatch(startfetchingpokemonlist(page))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  return (
    <Pokemoncontainer>
        <Pokedexcontainer>
            <Childcontainer>
              <Pokedextitle>Pokédex</Pokedextitle>
            </Childcontainer>

            <Formbox>
              <Form onSubmit={onSubmitform}>
                <Inputform value={mypokemon} onChange={onInputchange}/>
              </Form>

              <div>
                <Botones>Lista</Botones><Buttoncuadricula>Cuadricula</Buttoncuadricula>
              </div>
            </Formbox>

            <Childcontainer>
                {infopokemon.length === 0 ? <PokemonList></PokemonList> : <Searchpokemonlist/>}
            </Childcontainer>
            
            <Buttoncontainer>
                  <Btnpage onClick={Anterior}>Previous</Btnpage><Btnpage onClick={Siguiente}>Next</Btnpage>
            </Buttoncontainer>
        </Pokedexcontainer>
    </Pokemoncontainer>
  )
}
