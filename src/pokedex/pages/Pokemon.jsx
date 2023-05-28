import { useSelector } from "react-redux"
import { Pokemoncontainer,Pokedextitle,Pokedexcontainer,Childcontainer,Formbox,Form,Inputform,Botones,Buttoncuadricula } from "../../assets"
import { useForm } from "../../hooks"
import { PokemonList } from "../components/PokemonList"
import { Searchpokemonlist } from "../components/Searchpokemonlist"


export const Pokemon = () => {
  const { mypokemon,onInputchange,onSubmitform } = useForm({pokemon:''})
  const { infopokemon } = useSelector(state => state.pokemon)
  
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
            
        </Pokedexcontainer>
    </Pokemoncontainer>
  )
}
