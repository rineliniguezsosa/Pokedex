import { Pokemoncontainer,Pokedextitle,Pokedexcontainer,Childcontainer,Formbox,Form,Inputform,Botones,Buttoncuadricula,Table,Tablecell } from "../../assets"
import { useForm } from "../../hooks"


export const Pokemon = () => {
  const { form,onInputchange,onSubmitform } = useForm({pokemon:''})

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
                </Table>
            </Childcontainer>   
        </Pokedexcontainer>
    </Pokemoncontainer>
  )
}
