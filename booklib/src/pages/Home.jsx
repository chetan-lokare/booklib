import { collection, getDocs, query, where } from "firebase/firestore";
import { auth, db } from '../firebase';
import { useEffect, useState } from "react";

export default function Home() {
    const [rack, setRack] = useState([]);

    const fetchPost = async () => {
        await getDocs(collection(db, "rack" + auth.currentUser.uid))
            .then((querySnapshot)=>{               
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));
                setRack(newData);
            })
    }
   
    auth.onAuthStateChanged((user) => {
        if (user) {
          fetchPost();
        }
    });

    return (
        <>
            <div className="pageID">
                <div className="pgidline"></div>
                <p className="pgidname">Home</p>
                
            </div>

            <div className="rack">
                {rack.map((shelf) => (
                    <div className="shelf">
                        <p className="shelfname">{shelf.name}</p>
                        <div className="books" key={shelf.books}>
                            {shelf.books.map((book) => (
                                <p className="book">{book}</p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}