import styled from 'styled-components'

export const Container = styled.div`
    height:640px; 
    flex-wrap: wrap;
    justify-content: center; 
    align-items: center; 
    border:1px red solid ; 
    display: flex;
    flex-direction: column;
    padding: 10px;
    width: 1325px;
`;

export const Divtitle = styled.div`
    width: auto;
    border:1px red solid;
    height: auto;
`

export const Formcontainer = styled.div`
    width:200px;
    border: 1px red solid;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Pokemoncontainer = styled(Formcontainer)`
    width:1363px;
    height: 650px;    
`

export const Pokedexcontainer = styled.div`
    width:1100px;
    height:500px;
    border:1px yellow solid;
`
export const Childcontainer = styled.div`
    width:100%;
    border:1px pink solid;
    padding:10px;
    box-sizing:border-box;
`