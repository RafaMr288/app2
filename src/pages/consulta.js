import { useEffect, useState } from "react"

function Consulta() {

    const [consultass, setconsultass] = useState()

    async function consultar(){

        try {
            let api = await fetch(`https://xanax-apis.online/api/consultas/telefone?query=19988509668&apitoken=painelAR`)
            .then(e=>{
                return e.json()
            })
            .catch(error=>{
                console.log(error)
            })
            setconsultass(api)
        }
        catch{

        }
    }

    useEffect(()=>{

        consultar()

    }, [])

    return (
        <>
        
            <button onClick={()=>{console.log(consultass.resultado)}}>VER</button>
            <h1>{String(consultass.resultado)}</h1>

        </>
    )

}

export default Consulta