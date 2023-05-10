import { Pokemoncontainer,Pokedextitle,Pokedexcontainer,Childcontainer,Formbox,Form,Inputform,Buttonlista } from "../../assets"


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
