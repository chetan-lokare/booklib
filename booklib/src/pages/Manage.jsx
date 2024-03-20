import { collection, addDoc, setDoc, doc, getDocs, deleteDoc } from "firebase/firestore";
import { auth, db } from '../firebase';
import { useEffect, useState } from "react";

export default function Manage() {

    const [shelf, setShelf] = useState();

    const addShelf = async (e) => {
            await setDoc(doc(db, "rack" + auth.currentUser.uid, shelf), {name: shelf, books: []});
    }

    const deleteShelf = async (shlf) => {
        console.log(shlf)
        await deleteDoc(doc(db, "rack" + auth.currentUser.uid, shlf));
    }

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

    const addBook = async () => {

    }

    return (
        <>
            <div className="pageID">
                <div className="pgidline"></div>
                <p className="pgidname">Manage</p>
            </div>

            <div className="rack">
                {rack.map((shlf) => (
                    <div key={shlf} className="shelf">
                        <p key={shlf.name} className="shelfname">
                            <p className="actshlfname">{shlf.name}</p>
                            <button className="editshelf">Edit</button>
                            <button className="delshelf" onClick={() => deleteShelf(shlf.id)}>Delete</button>
                        </p>
                        <div className="books" key={shlf.books}>
                            {shlf.books.map((book) => (
                                <>
                                    <p key={book} className="book">
                                        {book}
                                        <button className="removebook">✕</button>
                                    </p>
                                </>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="shelfaddtools">
                <input 
                    className="addshelf"
                    placeholder="New Shelf..." 
                    onChange={(event) => {
                        setShelf(event.target.value)
                    }}
                />
                <button onClick={addShelf} className="addshbtn">Add</button>
            </div>


        </>
    )
}