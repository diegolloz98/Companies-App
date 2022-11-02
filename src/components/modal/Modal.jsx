import React, {useState } from 'react';
import './modal.css'
import { firestore } from "../../firebase";
import { addDoc, collection } from "@firebase/firestore";
import {
    Form, Input, Button,
  } from 'semantic-ui-react';

const Modal = ( {setOpenModal } ) => {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [type, setType] = useState("");
    const [comment, setComment] = useState("");

    const ref = collection(firestore, "companies");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("companyName: "  + name + 
                    " creationDate: " + date +
                    " companyType: "  + type +
                    " comment: " + comment);
    
        let data = {
          companyName:  name,
          creationDate: date,
          companyType: type,
          comment: comment,

        }
    
        try{
          addDoc(ref, data);
          setOpenModal(false);
          alert("The company has been updated successfully👍");
        } catch (e) {
          console.log(e);
          alert(e);
        }

        setName("");
        setDate("");
        setType("");
        setComment("");
    };
  return (
    <div className="modalBackground">
        <div className="modalContainer">
            <div className="titleCloseBtn">
                <button
                    onClick={() => {
                    setOpenModal(false);
                    }}
                >
                    X
                </button>
                </div>
                <div className="title">
                    <h1>Company</h1>
                </div>
            <div >
                <Form className="form" onSubmit={handleSubmit}>
                    <div class="field">
                        <label>Nombre de la Empresa</label>
                        <Input
                            required
                            type="text"
                            maxLength="255"
                            placeholder="Nombre"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div class="field">
                        <label>Fecha de constitución</label>
                        <input
                            required
                            placeholder="Fecha"
                            value={date}
                            type="date"
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>
                    <div class="field">
                        <label>Tipo de empresa</label>
                        <select
                            required
                            name="type" 
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                        >
                            <option ></option>
                            <option value="dis">Distribuidor</option>
                            <option value="may">Mayorista</option>
                            <option value="ufi">Usuario final</option>
                        </select>          
                    </div>
                    <div class="field">
                        <label>Comentarios</label>
                        <textarea
                            rows="3"
                            maxLength="1020"
                            placeholder="Comentarios"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        />              
                    </div>
                    <Button
                        type="submit"
                    >
                        Guardar
                    </Button>   
                </Form>
            </div>
        </div>
    </div>
  )
}

export default Modal