import { Pokemoncontainer,Pokedextitle,Pokedexcontainer,Childcontainer,Formbox,Form,Inputform,Botones,Buttoncuadricula } from "../../assets"
import { useForm } from "../../hooks"


export const Pokemon = () => {
  const { onInputchange } = useForm({pokemon:''})
  return (
    <Pokemoncontainer>
        <Pokedexcontainer>
            <Childcontainer>
              <Pokedextitle>Pokédex</Pokedextitle>
            </Childcontainer>

            <Formbox>
              <Form>
                <Inputform/>
              </Form>

              <div>
                <Botones>Lista</Botones><Buttoncuadricula>Cuadricula</Buttoncuadricula>
              </div>
            </Formbox>    
        </Pokedexcontainer>
    </Pokemoncontainer>
  )
}
