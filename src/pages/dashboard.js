import "./dash.css"
import { useState, useEffect } from "react"
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { useNavigate } from "react-router-dom";

const firebaseConfig = {
    apiKey: "AIzaSyAEw0hYfUyhfiEGDrftgGih2JhLT3yFDxs",
    authDomain: "chatpy-449a5.firebaseapp.com",
    projectId: "chatpy-449a5",
    storageBucket: "chatpy-449a5.appspot.com",
    messagingSenderId: "859063016625",
    appId: "1:859063016625:web:640a4766ec13f585a79690",
    measurementId: "G-N5R5ZX63XG"
  };
  
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

function Dashboard(){

    const [user, setUser] = useState()
    const [email, setEmail] = useState()
    const [consulta, setConsulta] = useState()
    const [input , setInput] = useState("")
    const navigate = useNavigate();

    useEffect(()=>{

        const unsubscribe = auth.onAuthStateChanged((user) => {
        if (user) {
            // O usuário está conectado
            setUser(user);
            setEmail(user.email)
        } else {
            // O usuário não está conectado
            setUser(null);
            navigate("/login")
        }
        })

    }, [])

    async function consultar_telefone(){

        try{
            let api = await fetch(`https://xanax-apis.online/api/consultas/telefone?query=${input}&apitoken=painelAR`)
            .then(e=>{
                return e.json()
            })
            .catch(error=>{
                console.log(error)
            })
            let api2 = api.resultado
            setConsulta(api2)
            
        }
        catch{
                
        }

    }

    async function consultar_cpf(){

        try{
            let api = await fetch(`https://xanax-apis.online/api/consultas/cpf1?query=${input}&apitoken=painelAR`)
            .then(e=>{
                return e.json()
            })
            .catch(error=>{
                console.log(error)
            })
            let api2 = api.resultado
            setConsulta(api2)
            
        }
        catch{
            
        }

    }

    async function consultar_cpf2(){

        try{
            let api = await fetch(`https://xanax-apis.online/api/consultas/cpf2?query=${input}&apitoken=painelAR`)
            .then(e=>{
                return e.json()
            })
            .catch(error=>{
                console.log(error)
            })
            let api2 = api.resultado
            setConsulta(api2)
            
        }
        catch{
            
        }

    }

    async function consultar_placa(){

        try{
            let api = await fetch(`https://xanax-apis.online/api/consultas/placa?query=${input}&apitoken=painelAR`)
            .then(e=>{
                return e.json()
            })
            .catch(error=>{
                console.log(error)
            })
            let api2 = api.resultado
            setConsulta(api2)
            
        }
        catch{
            
        }

    }

    async function consulta_nome(){

        try{
            let api = await fetch(`https://xanax-apis.online/api/consultas/nome2?query=${input}&apitoken=painelAR`)
            .then(e=>{
                return e.json()
            })
            .catch(error=>{
                console.log(error)
            })
            setConsulta(api.resultado)
        }
        catch{
            
        }

    }

    async function consulta_nome2(){

        try{
            let api = await fetch(`https://xanax-apis.online/api/consultas/nome2?query=${input}&apitoken=painelAR`)
            .then(e=>{
                return e.json()
            })
            .catch(error=>{
                console.log(error)
            })
            setConsulta(api.resultado)
        }
        catch{
            
        }

    }

    async function consultar_rg(){

        try{
            let api = await fetch(`https://xanax-apis.online/api/consultas/rg?query=${input}&apitoken=painelAR`)
            .then(e=>{
                return e.json()
            })
            .catch(error=>{
                console.log(error)
            })
            setConsulta(api.resultado)
        }
        catch{
            
        }

    }

    async function consultar_email(){

        try{
            let api = await fetch(`https://xanax-apis.online/api/consultas/email?query=${input}&apitoken=painelAR`)
            .then(e=>{
                return e.json()
            })
            .catch(error=>{
                console.log(error)
            })
            setConsulta(api.resultado)
        }
        catch{
            
        }

    }

    async function consultar_ip(){

        try{
            let api = await fetch(`https://xanax-apis.online/api/consultas/ip?query=${input}&apitoken=painelAR`)
            .then(e=>{
                return e.json()
            })
            .catch(error=>{
                console.log(error)
            })
            setConsulta(api.resultado)
        }
        catch{
            
        }

    }

    function singout(){

        auth.signOut();
        navigate("/login")

    }

    async function rastrearmento(){

        try {

            let api = await fetch(`https://api.linketrack.com/track/json?user=teste&token=1abcd00b2731640e886fb41a8a9671ad1434c599dbaa0a0de9a5aa619f29a83f&codigo=${input}`)
            .then(e=>{
                return e.json()
            })
            .catch(e=>{
                setConsulta(e)
            })
            console.log(api.eventos.length)
            let txt = ""
            for(let i=0;i<api.eventos.length;i++){
                txt += `Data: ${api.eventos[i].data} - Hora: ${api.eventos[i].hora} - Local: ${api.eventos[i].local} - Status: ${api.eventos[i].status} ${api.eventos[i].subStatus[1]}\n\n `
            }
            setConsulta(txt)
        }
        catch{

        }

    }

    return (
        <div className="display-dash">
            <header style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
                <h1 style={{color:"white"}}>Bem Vindo {email}</h1>
                <div>
                    <button>Status: Ativo</button>
                    <button style={{background:"red"}} onClick={()=>{singout()}}>Desconectar</button>
                    <button onClick={()=>{console.log(consulta)}}>Ver</button>
                </div>
            </header>
            <div className="display-dash-consulta">
                <h2 style={{color:"black"}}>Consultar</h2>
                <input type="text" placeholder="nome-cpf-telefone" style={{textAlign:"center"}}
                value={input}
                onChange={e => setInput(e.target.value)}
                ></input>
                <div>
                    <button style={{backgroundColor:"blue"}} onClick={()=>{consulta_nome()}}>C Nome</button>
                    <button style={{backgroundColor:"blue"}} onClick={()=>{consulta_nome2()}}>C Nome 2</button>
                    <button style={{backgroundColor:"blue"}} onClick={()=>{consultar_cpf()}}>C CPF</button>
                    <button style={{backgroundColor:"blue"}} onClick={()=>{consultar_cpf2()}}>C CPF 2</button>
                    <button style={{backgroundColor:"blue"}} onClick={()=>{consultar_telefone()}}>C Telefone</button>
                    <button style={{backgroundColor:"blue"}} onClick={()=>{consultar_placa()}}>C Placa</button>
                    <button style={{backgroundColor:"blue"}} onClick={()=>{consultar_rg()}}>C RG</button>
                    <button style={{backgroundColor:"blue"}} onClick={()=>{consultar_email()}}>C email</button>
                    <button style={{backgroundColor:"blue"}} onClick={()=>{consultar_ip()}}>C IP</button>
                    <button style={{backgroundColor:"blue"}} onClick={()=>{rastrearmento()}}>C Correio rastreo</button>
                </div>
                <textarea style={{width:"90%", height:500, fontSize:15, textAlign:"center"}} onChange={()=>{}} value={consulta}></textarea>
            </div>
        </div>
    )

}

export default Dashboard
