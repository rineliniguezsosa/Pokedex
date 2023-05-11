import styled from 'styled-components'

export const Table = styled.table`
    width:100%;
    height:100px;
    border:1px #E1E7EE solid;
    border-radius:2px;
    border-collapse:collapse;
`
export const Tablecell = styled.th`
    max-width:5%;
    border:none;
    height:70px;
    background-color:#EFF2F7;
`
export const Tablecellinh = styled(Tablecell)`
    border-bottom:1px #E1E7EE solid;
    background-color:white;
`