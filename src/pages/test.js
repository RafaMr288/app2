import { initializeApp } from "firebase/app";
import 'firebase/firestore';
import { useState } from "react";
import { getFirestore, addDoc, collection, getDocs, setDoc, doc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAEw0hYfUyhfiEGDrftgGih2JhLT3yFDxs",
    authDomain: "chatpy-449a5.firebaseapp.com",
    projectId: "chatpy-449a5",
    storageBucket: "chatpy-449a5.appspot.com",
    messagingSenderId: "859063016625",
    appId: "1:859063016625:web:640a4766ec13f585a79690",
    measurementId: "G-N5R5ZX63XG"
};

function Test() {

    const [dados, setDados] = useState()
    const [txt, setTxt] = useState()

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const col = collection(db, "dados")

    const saveDataToFirestore = async () => {

        await setDoc(doc(db, "dados", "la"), {
            name: txt,
            state: "CA",
            country: "USA"
          });

    };

    const fetchDataFromFirestore = async () => {
        const querySnapshot = await getDocs(collection(db, "dados"));
        const temporaryArr = [];
        querySnapshot.forEach((doc) => {
            temporaryArr.push(doc.data());
        });
        console.log(temporaryArr)
        setDados(temporaryArr);
    };

    return (
        <div>
            <h1>entro</h1>
            <input
            value={txt}
            onChange={e=>setTxt(e.target.value)}
            ></input>
            <button onClick={saveDataToFirestore}>ADICIONAR</button>
            <button onClick={fetchDataFromFirestore}>ver</button>
        </div>
    )

}

export default Test