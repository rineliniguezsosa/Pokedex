import { Formik,Form,Field } from 'formik'
import { Titlepokedex,Container,Divtitle,Formcontainer } from '../../assets'

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
                  <Field></Field>
                </Form>
              </Formik>
          </Formcontainer>
      </Container>
    </>
  )
}


