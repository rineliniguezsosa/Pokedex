import { Formik,Form,Field } from 'formik'
import { Titlepokedex,Container,Divtitle,Formcontainer,Submitbutton } from '../../assets'

export const Loginpage = () => {

  const initialValues = {
    email:'',
    password:''
  }

  const Submitform = (values) =>{

  }
  return (
    <>
      <Container>
        
          <Divtitle>
            <Titlepokedex>Pokedex</Titlepokedex>
          </Divtitle>

          <Formcontainer>
              <Formik initialValues={initialValues} onSubmit={Submitform}>
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


