import { useSelector,useDispatch } from "react-redux"
import { Pokemoncontainer,Pokedextitle,Pokedexcontainer,Childcontainer,Formbox,Form,Inputform,Botones,Buttoncuadricula,Table,Tablecell,Tablecellinh,Shiny   } from "../../assets"
import { useForm } from "../../hooks"
import { useState,useEffect } from "react"
import { startfetchingpokeapi } from "../../store"


export const Pokemon = () => {
  const { form,onInputchange,onSubmitform } = useForm({pokemon:''})
  const { pokemones } = useSelector(state => state.pokemon)
  const dispatch = useDispatch()

  const [page,setPage] = useState(0)

  useEffect(() => {
    dispatch(startfetchingpokeapi(page))
  }, [page])
  
  return (
    <Pokemoncontainer>
        <Pokedexcontainer>
            <Childcontainer>
              <Pokedextitle>Pokédex</Pokedextitle>
            </Childcontainer>

            <Formbox>
              <Form onSubmit={onSubmitform}>
                <Inputform value={form} onChange={onInputchange}/>
              </Form>

              <div>
                <Botones>Lista</Botones><Buttoncuadricula>Cuadricula</Buttoncuadricula>
              </div>
            </Formbox>

            <Childcontainer>
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
                    {pokemones.map(pokemon => (
                    <tr key={pokemon.order}>
                        <Tablecellinh>{pokemon.id}</Tablecellinh>
                        <Tablecellinh>{pokemon.name}</Tablecellinh>
                        <Tablecellinh><img alt="pokemon" src={pokemon.sprites.front_default}></img></Tablecellinh>
                        <Tablecellinh>{pokemon.types.map(tipo=>(<p key={tipo.slot}>{tipo.type.name}</p>))}</Tablecellinh>
                        <Tablecellinh>{pokemon.abilities.map(ability=>(<p key={ability.ability.slot}>{ability.ability.name}</p>))}</Tablecellinh>
                        <Tablecellinh><Shiny to={`/pokemonshiny/${pokemon.id}`}>Shyny</Shiny></Tablecellinh>
                    </tr>
                      ))
                    }
                  </tbody>
                </Table>
            </Childcontainer>
        </Pokedexcontainer>
    </Pokemoncontainer>
  )
}
