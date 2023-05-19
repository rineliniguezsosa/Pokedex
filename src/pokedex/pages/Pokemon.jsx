import { useSelector,useDispatch } from "react-redux"
import { Pokemoncontainer,Pokedextitle,Pokedexcontainer,Childcontainer,Formbox,Form,Inputform,Botones,Buttoncuadricula,Table,Tablecell,Tablecellinh   } from "../../assets"
import { useForm } from "../../hooks"
import { useState,useEffect } from "react"
import { startfetchingpokeapi } from "../../store"


export const Pokemon = () => {
  const { form,onInputchange,onSubmitform } = useForm({pokemon:''})
  const { pokemones } = useSelector(state => state.pokemon)
  const dispatch = useDispatch()

  const [page,setPage] = useState(5)

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
                    <tr>
                        <Tablecellinh></span></Tablecellinh>
                        <Tablecellinh></Tablecellinh>
                        <Tablecellinh></Tablecellinh>
                        <Tablecellinh></Tablecellinh>
                        <Tablecellinh></Tablecellinh>
                        <Tablecellinh></Tablecellinh>
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
