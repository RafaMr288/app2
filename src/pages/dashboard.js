import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { getFirestore, addDoc, collection, getDocs, doc } from "firebase/firestore";
import "./dashboard.css"

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
    const db = getFirestore(app);
    const col = collection(db, "dados")

    const [user, setUser] = useState("")
    const [vulgo, setVulgo] = useState("")
    const [lado, setLado] = useState("")
    const [cidade, setCidade] = useState("")
    const [padrinho, setPadrinho] = useState("")

    useEffect(()=>{

        auth.onAuthStateChanged(async (user) => {
            if(user){

                setUser(user.email)
                const querySnapshot = await getDocs(collection(db, "dados"));
                const temporaryArr = [];
                querySnapshot.forEach((doc) => {
                    temporaryArr.push(doc.data());
                });
                const emaill = user.email
                const users = temporaryArr
                let count = users.length
                
                for(let i=0;i<count;i++){
                    if(users[i].user === emaill){
                        setCidade(users[i].cidade)
                        setLado(users[i].lado)
                        setVulgo(users[i].vulgo)
                        setPadrinho(users[i].padrinho)
                        break
                    }else{

                    }
                }

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

        <div className="dash">
            <header>
                <h3>Bem vindo a CENTRAL</h3>
                <button onClick={exit} className="exit">Sair</button>
            </header>
            <div className="dados">
                <h2>Registro</h2>
                <h3>VULGO: {vulgo}</h3>
                <h3>CIDADE: {cidade}</h3>
                <h3>LADO: {lado}</h3>
                <h3>PADRINHO: {padrinho}</h3>
            </div>
        </div>

    )

}

export default Dashboard