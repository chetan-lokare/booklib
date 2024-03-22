import { collection, addDoc, setDoc, doc, getDocs, deleteDoc } from "firebase/firestore";
import { auth, db } from '../firebase';
import { useEffect, useState } from "react";
import Modal from "../Modal";

export default function Manage() {

    const [shelf, setShelf] = useState();
    const [openModal, setOpenModal] = useState(false);

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

    const [selectedShelf, setSelectedShelf] = useState(null); // Stores the shelf for editing
    
    const handleOpenModal = (shelf) => {
      setSelectedShelf(shelf); // Set the shelf to edit
      setOpenModal(true);
    };
    
    const handleCloseModal = () => {
      setOpenModal(false);
      setSelectedShelf(null); // Reset selected shelf on close
    };

    return (
        <>
            <div className="pageID">
                <div className="pgidline"></div>
                <p className="pgidname">Manage</p>
            </div>

            <div className="rack">
                <Modal open={openModal} shelf={selectedShelf} onClose={handleCloseModal} />
                {rack.map((shlf) => (
                    <div className="shelf">
                        <div className="shelfname">
                            <p className="actshlfname">{shlf.name}</p>
                            <button className="editshelf" onClick={() => handleOpenModal(shlf)}>Edit</button>
                            <button className="delshelf" onClick={() => deleteShelf(shlf.id)}>Delete</button>
                            </div>
                        <div className="books">
                            {shlf.books.map((book) => (
                                <>
                                    <div className="book">
                                        {book}
                                    </div>
                                    <button className="removebook">✕</button>
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