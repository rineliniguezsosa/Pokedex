import { Table,Tablecell,Tablecellinh,Shiny, Btnpage } from "../../assets"
import { useSelector } from "react-redux"
import { usePokemonpage } from "../../hooks"


export const PokemonList = () => {
  const { pokemonlist } = useSelector(state => state.pokemon)
  const { Siguiente,Anterior} = usePokemonpage(0)

  return (
    <Table>
        <thead>
        <tr>
            <Tablecell>#</Tablecell>
            <Tablecell>Nombre</Tablecell>
            <Tablecell>Vista</Tablecell>
            <Tablecell>Tipos</Tablecell>
            <Tablecell>Habilidades</Tablecell>
            <th style={{maxWidth:'5%',height:'70px'}}></th>
        </tr>
        </thead>
        <tbody>
        {pokemonlist.map(pokemon => (
        <tr key={pokemon.order}>
            <Tablecellinh>{pokemon.id}</Tablecellinh>
            <Tablecellinh>{pokemon.name}</Tablecellinh>
            <Tablecellinh><img alt="pokemon" src={pokemon.sprites.front_default}></img></Tablecellinh>
            <Tablecellinh>{pokemon.types.map(tipo=>(<p key={tipo.slot}>{tipo.type.name}</p>))}</Tablecellinh>
            <Tablecellinh>{pokemon.abilities.map(ability=>(<p key={ability.ability.name}>{ability.ability.name}</p>))}</Tablecellinh>
            <Tablecellinh><Shiny to={`/pokemonshiny/${pokemon.id}`}>Shyny</Shiny></Tablecellinh>
        </tr>
            ))
        }
        <tr>
            <Tablecellinh colSpan={6}>
                <Btnpage onClick={Anterior}>Previous</Btnpage><Btnpage onClick={Siguiente}>Next</Btnpage>
            </Tablecellinh>
        </tr>
        </tbody>
    </Table>
  )
}
