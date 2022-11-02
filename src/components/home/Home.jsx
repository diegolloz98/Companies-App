import React, {useState, useEffect} from 'react';
import './home.css';
import { firestore } from "../../firebase";
import { QuerySnapshot } from '@firebase/firestore';
import Modal from '../modal/Modal'
import { Icon, Label, Menu, Table } from 'semantic-ui-react';
import { collection } from "@firebase/firestore";

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const ref = collection(firestore, "companies");


  return (
    <div className="container header___container">
        <button
          className="openModalBtn"
          onClick={() => {
            setModalOpen(true);
          }}
        >
          Add
        </button>

        {modalOpen && <Modal setOpenModal={setModalOpen} />}
    </div>
  )
}

export default Home

