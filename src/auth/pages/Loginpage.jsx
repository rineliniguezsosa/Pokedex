import { Formik,Form,Field } from 'formik'
import { Titlepokedex,Container,Divtitle,Formcontainer,Submitbutton } from '../../assets'

export const Loginpage = () => {
  return (
    <>
      <Container>
        
          <Divtitle>
            <Titlepokedex>Pokedex</Titlepokedex>
          </Divtitle>

          <Formcontainer>
              <Formik>
                <Form>
                  <Field 
                  type="email"
                  name="email"
                  placeholder="Correo Electronico"
                  ></Field>

                  <Field 
                  type="password"
                  name="password"
                  placeholder="Contraseña"
                  ></Field>
                </Form>
              </Formik>
          </Formcontainer>
      </Container>
    </>
  )
}


