import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";

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

function Dashboard() {

    const navigate = useNavigate()

    useEffect(()=>{

        auth.onAuthStateChanged((user) => {
            if(user){

                

            }
            else{

                navigate("/login")

            }
        })

    }, [])

    function exit() {

        auth.signOut()
        navigate("/login")

    }

    return (

        <>
            <h1>Bem vindo</h1>
            <button onClick={exit}>Sair</button>
        </>

    )

}

export default Dashboard