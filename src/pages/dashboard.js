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

    const [user, setUser] = useState(null)
    const [email, setEmail] = useState()
    const [saldo, setSaldo] = useState(999999)
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
            setConsulta(api.resultado)
        }
        catch{
            consulta.log("error")
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
            setConsulta(api.resultado)
        }
        catch{
            consulta.log("error")
        }

    }

    async function consulta_nome(){

        try{
            let api = await fetch(`https://xanax-apis.online/api/consultas/nome?query=${input}&apitoken=painelAR`)
            .then(e=>{
                return e.json()
            })
            .catch(error=>{
                console.log(error)
            })
            setConsulta(api.resultado)
        }
        catch{
            consulta.log("error")
        }

    }

    function singout(){

        auth.signOut();
        navigate("/login")

    }

    return (
        <div className="display-dash">
            <header style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
                <h1 style={{color:"white"}}>Bem Vindo {email}</h1>
                <button onClick={()=>{console.log(user)}}>Saldo: {saldo} admin</button>
                <button style={{background:"red"}} onClick={()=>{singout()}}>Desconectar</button>
            </header>
            <div className="display-dash-consulta">
                <h2 style={{color:"black"}}>Consultar</h2>
                <input type="text" placeholder="nome-cpf-telefone" style={{textAlign:"center"}}
                value={input}
                onChange={e => setInput(e.target.value)}
                ></input>
                <button style={{backgroundColor:"blue"}} onClick={()=>{consulta_nome()}}>C Nome</button>
                <button style={{backgroundColor:"blue"}} onClick={()=>{consultar_cpf()}}>C CPF</button>
                <button style={{backgroundColor:"blue"}} onClick={()=>{consultar_telefone()}}>C Telefone</button>
                <h3 style={{color:"black"}}>{consulta}</h3>
            </div>
        </div>
    )

}

export default Dashboard