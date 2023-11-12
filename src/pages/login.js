import "./login.css"
import { useState, useEffect } from "react"
import { initializeApp } from "firebase/app"
import { getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import { useNavigate } from "react-router-dom"

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

function Login(){

    useEffect(()=>{

        const unsubscribe = auth.onAuthStateChanged((user) => {
        if (user) {
            // O usuário está conectado
            navigate("/dashboard")
        } else {
            // O usuário não está conectado
        }
        })

    }, [])

    document.title = "Login"

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    async function login_dash(){

        const auth = getAuth(app);

        try {
            const provider = await signInWithEmailAndPassword(auth, email, password)
            .then(async ()=>{
                navigate("/dashboard")
            })
            .catch((error)=>{
                console.clear()
                console.error("login error")
                console.log(error)
            })
        }
        catch (error) {

            console.log(error)

        }

    }

    return (
        <div className="display-login">
            <h2>Login RH do PCC</h2>
            <h3>Email/User</h3>
            <input type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}
            ></input>
            <h3>Password</h3>
            <input type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            ></input>
            <button onClick={login_dash}>Login</button>
        </div>
    )

}

export default Login