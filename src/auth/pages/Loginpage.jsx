import { Formik,Form,Field } from 'formik'
import { Titlepokedex,Container,Divtitle,Formcontainer,Submitbutton } from '../../assets'

export const Loginpage = () => {

  const initialValues = {
    email:'',
    password:''
  }

  return (
    <>
      <Container>
        
          <Divtitle>
            <Titlepokedex>Pokedex</Titlepokedex>
          </Divtitle>

          <Formcontainer>
              <Formik initialValues={initialValues}>
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

                  <Submitbutton>Iniciar Sesión</Submitbutton>
                </Form>
              </Formik>
          </Formcontainer>
      </Container>
    </>
  )
}


