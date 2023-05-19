
export const startfetchingpokeapi = (page) =>{
    return async(dispatch)=>{
        try {
            const urlpokemones = []
            const req = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=5&offset=${page}`)
            const resp = await req.json()
        } catch (error) {
            
        }
    }
}