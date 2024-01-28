import tony from "./imgs/tony.png"
import React, { useState, useEffect } from "react"
import { initializeApp } from "firebase/app"
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth"
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

function Login() {

    const navigate = useNavigate()

    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")

    useEffect(()=>{

        auth.onAuthStateChanged((user) => {
            if(user){

                navigate("/dashboard")

            }
            else{

            }
        })

    }, [])

    function login(){

        signInWithEmailAndPassword(auth, user, password)
        .then(e => {
            console.log(e)
        })
        .catch(() => {
            console.error("login incorreto")
        })

    }

    return (
        <div className="display-login">
            <img className="tony-login" src={tony} width="70px" alt="tony"></img>
            <h3>Central PCC 019-011</h3>
            <input placeholder="user" type="text"
            value={user}
            onChange={e=>setUser(e.target.value)}
            ></input>
            <input type="password" placeholder="password"
            value={password}
            onChange={e=>setPassword(e.target.value)}
            ></input>
            <input type="submit" value="ENTRAR" onClick={login}></input>
        </div>
    )

}

export default Login