import { useEffect, useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/config";


const Imgs = () => {
    const [imgs, setImgs] = useState([])

    useEffect(() => {
        fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY}&q=yellow+flowers&image_type=photo`).then(result => {

            return result.json();
        }).then(result => {
            setImgs(result.hits);
        })
    }, [])

    const onClick = async (item) => {
        try {
            const docRef = await addDoc(collection(db, "imgs"), item);
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    const markup = imgs.map(item => {
        return <img src={item.webformatURL} width="300" alt={item.tags} onClick={() => onClick(item)} />
    })

    return (
        <>
            {markup}
        </>
    );
}

export default Imgs;