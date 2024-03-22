import { collection, doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from "./firebase";

const Modal = ({ open, shelf, onClose }) => {
  if (!open) return null;

  const shelfName = shelf.name;
  const [newShelfName, setNewShelfName] = useState("");

  const editShelfName = async () => {
    const documentRef = doc(collection(db, shelfName), shelf.id);
    await updateDoc(documentRef, {
      name: newShelfName
    });
  }


  return (
    <div className="overlay">
      <div className="modal-container">
        <div className="edit-title"><text>Edit.</text> <text className="logo-xs">Booklib.</text> </div>
        <div className="editOptions">
          <div className="editname"><text>Name: </text><input placeholder={shelfName + "..."} onChange={(event) => {setNewShelfName(event.target.value)}}/><button className="editshelfbtn" onClick={editShelfName}>Edit</button></div>
        </div>
        <button onClick={onClose} className="modalClose">✕</button>
      </div>
    </div>
  );
};

export default Modal;
