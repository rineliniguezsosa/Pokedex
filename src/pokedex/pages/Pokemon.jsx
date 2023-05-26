import { useSelector,useDispatch } from "react-redux"
import { Pokemoncontainer,Pokedextitle,Pokedexcontainer,Childcontainer,Formbox,Form,Inputform,Botones,Buttoncuadricula,Buttoncontainer,Btnpage   } from "../../assets"
import { useForm } from "../../hooks"
import { useState,useEffect } from "react"
import { startfetchingpokemonlist } from "../../store"
import { PokemonList } from "../components/PokemonList"

export const Pokemon = () => {
  const { mypokemon,onInputchange,onSubmitform } = useForm({pokemon:''})
  const dispatch = useDispatch()

  const [page,setPage] = useState(0)

  useEffect(() => {
    dispatch(startfetchingpokemonlist(page))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  const Anterior = () =>{
    (page < 1) ? setPage(page) : setPage(page-5) //validaciones
  }

  const Siguiente = () =>{
    (page === 1280) ? setPage(page): setPage(page+5) //limitando la busqueda de los pokemons ya que son 1280
  }
  
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
                <PokemonList></PokemonList>
            </Childcontainer>
            
            <Buttoncontainer>
                  <Btnpage onClick={Anterior}>Previous</Btnpage><Btnpage onClick={Siguiente}>Next</Btnpage>
            </Buttoncontainer>
        </Pokedexcontainer>
    </Pokemoncontainer>
  )
}
