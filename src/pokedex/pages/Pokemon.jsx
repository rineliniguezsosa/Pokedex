import { Pokemoncontainer,Pokedextitle,Pokedexcontainer,Childcontainer,Formbox,Form,Inputform,Botones } from "../../assets"


export const Pokemon = () => {
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
            </Formbox>    
        </Pokedexcontainer>
    </Pokemoncontainer>
  )
}
