import googleImg from '../../imgs/googleBtn.png'
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, storage, app, db } from '../../firebase/config'
import { ref, listAll } from "firebase/storage";
import { useEffect } from 'react';
import { collection, doc, setDoc, getDocs, addDoc } from "firebase/firestore";




const provider = new GoogleAuthProvider();




const Form = () => {
    const authWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, provider)

            const user = result.user;
            console.log('user', user);
        } catch (error) {
            console.log("error", error)
        }
    }


    return (
        <>
            <button onClick={authWithGoogle}>
                <img src={googleImg} alt="img" />
            </button>
        </>
    );
}

export default Form;






