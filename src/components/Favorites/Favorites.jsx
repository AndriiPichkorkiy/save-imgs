import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase/config";


const Favorites = () => {

    const [hits, setHits] = useState([])
    console.log('hits', hits);

    useEffect(() => {

        (async () => {
            const querySnapshot = await getDocs(collection(db, "imgs"))
            console.log("querySnapshot >>>", querySnapshot)
            // console.log("querySnapshot docs >>>", querySnapshot.docs)

            const tempArr = []

            querySnapshot.forEach((doc) => {
                tempArr.push(doc.data());
            });

            setHits(tempArr)
        })()

    }, [])

    console.log('hits', hits);

    const markup = hits.map(item => {
        return <img src={item.webformatURL} width="300" alt={item.tags} />
    })
    return (
        <>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            {markup}
        </>
    );
}

export default Favorites;
