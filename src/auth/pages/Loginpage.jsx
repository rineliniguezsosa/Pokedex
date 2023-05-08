import { Formik,Form,Field,ErrorMessage } from 'formik'
import { Titlepokedex,Container,Divtitle,Formcontainer,Submitbutton } from '../../assets'
import { useDispatch } from 'react-redux'
import * as Yup from 'yup'

export const Loginpage = () => {
  const dispatch = useDispatch()

  const initialValues = {
    email:'',
    password:''
  }

  const validationSchema = Yup.object({
    email:Yup.string().email('El correo debe de contener un @').required('El email es requerido'),
    password:Yup.string().length(6,'La contraseña debe de contener mas de 6 letras').required('El password es requerido')
  })

  const Submitform = (values,onSubmitProps) =>{
    console.log(values)
    onSubmitProps.resetForm()
  }
  return (
    <>
      <Container>
        
          <Divtitle>
            <Titlepokedex>Pokedex</Titlepokedex>
          </Divtitle>

          <Formcontainer>
              <Formik initialValues={initialValues} onSubmit={Submitform} validationSchema={validationSchema}>
                <Form>
                  <div>
                    <Field 
                    type="email"
                    name="email"
                    placeholder="Correo Electronico"
                    ></Field>
                    <ErrorMessage name="email"></ErrorMessage>
                  </div>
                  
                  <div>
                    <Field 
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    ></Field>
                    <ErrorMessage name="password"></ErrorMessage>
                  </div>
                  <Submitbutton>Iniciar Sesión</Submitbutton>
                </Form>
              </Formik>
          </Formcontainer>
      </Container>
    </>
  )
}


