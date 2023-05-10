import styled from 'styled-components'

export const Submitbutton = styled.button.attrs({
    type:'submit'
})`
  background-color: #47525E;
  border-radius: 3px;
  border: 2px solid #47525E;
  color: white;
  margin:  0.5em 1em;
  padding: 0.25em 1em;
`
export const Botones = styled.button`
  background-color: #47525E;
  border-radius: 3px;
  border: 2px solid #47525E;
  color: white;
  padding: 2px 30px;
`
export const Buttoncuadricula = styled(Botones)`
  background-color: #FFFFFF;
  color: #47525E;
`