import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { imbarca } from "../redux/AnimaliSlice";
import { useDispatch } from "react-redux";


function FormImbarca() {
    const [formData, setFormData] = useState({ specie: '', sesso: '', peso: '' });
    const notify = () => toast.error('Non ho potuto aggiungere il tuo animale ');
    const navigate = useNavigate()
    const dispatch = useDispatch(null)

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const actionResult = await dispatch(imbarca(formData));
        const isRejected = imbarca.rejected.match(actionResult);
        if (isRejected) {
            notify()

        } else {
            navigate('/home');
        }
    }

    return (
        <>
            <Navbar />
            <div><Toaster position="top-right"
                reverseOrder={false} /></div>
            <div style={{ maxWidth: '600px', margin: 'auto', padding: '100px' }}>
                <form onSubmit={handleSubmit}>
                    <legend></legend>
                    <div className="mb-3 mx-auto">
                        <label for="specie" class="form-label">Specie</label>
                        <input type="text" className="form-control" id="specie" name="specie" value={formData.specie} onChange={handleChange} />
                    </div>
                    <div className="mb-3 mx-auto">
                        <label for="sesso" class="form-label">Sesso</label>
                        <input type="text" className="form-control" id="sesso" name="sesso" value={formData.sesso} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label for="peso" class="form-label">Peso</label>
                        <input type="number" class="form-control" id="peso" name="peso" value={formData.peso} onChange={handleChange} />
                    </div>
                    <center><button type="submit" class="btn btn-primary">Submit</button></center>
                </form>
            </div>
        </>
    );
}

export default FormImbarca;