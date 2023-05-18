import axios from 'axios'
import React, { useState, useEffect } from 'react';
import { CiTrash } from "react-icons/ci";
import { RxUpdate } from "react-icons/rx";
import Navbar from '../components/Navbar';

const Home = () => {
    const [showForm, setShowForm] = useState(false);
    const [specie, setSpecie] = useState('')
    const [sesso, setSesso] = useState('')
    const [peso, setPeso] = useState('')

    const Sbarca = async (specie, sesso) => {
        const url = 'http://localhost:8080/arca/rest/animale/sbarca';
        const data = { specie: specie, sesso: sesso }
        try {
            const response = await axios({
                method: 'DELETE',
                url: url,
                data: data,
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            callRestService()
            console.log('Risposta', response.data);
        }
        catch (error) {
            console.error('si è verificato un errore')
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        update();
    };

    const handleChange = (specie, sesso, peso) => {
        setShowForm(!showForm);
        setSpecie(specie)
        setSesso(sesso)
        setPeso(peso)
    }

    const update = async () => {
        const url = 'http://localhost:8080/arca/rest/animale/aggiorna';

        try {
            const response = await axios({
                method: 'PUT',
                url: url,
                data: {
                    specie: specie,
                    sesso: sesso,
                    peso: peso
                },
            })
            setPeso('')
            callRestService()
            setShowForm()
            console.log('Risposta', response.data);
        }
        catch (error) {
            console.error('si è verificato un errore')
        }
    }

    const [jsonData, setJsonData] = useState(null);
    const callRestService = async () => {
        const url = 'http://localhost:8080/arca/rest/animale/lista';

        try {
            const response = await axios.get(url);
            setJsonData(response.data)
        }
        catch (error) {
            console.error('si è verificato un errore')
        }
    }

    useEffect(() => {
        callRestService();
    }, []);

    return (
        <>
            <Navbar />
            <div className="container py-5" >
                {jsonData && (
                    <table className="table table-striped ">
                        <thead>
                            <tr>
                                <th scope="col">Specie</th>
                                <th scope="col">Sesso</th>
                                <th scope="col">Peso</th>
                                <th scope="col">Delete</th>
                                <th scope="col">Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {jsonData.map((element) => {
                                return <>
                                    <tr key={element.specie && element.sesso} className={specie === element.specie && sesso === element.sesso ? 'table-info' : ''}>
                                        <td>{element.specie}</td>
                                        <td>{element.sesso}</td>
                                        <td>{element.peso}</td>
                                        <td><button id="trash" onClick={() => Sbarca(element.specie, element.sesso)}><CiTrash /></button></td>
                                        <td><button id="update" onClick={() => handleChange(element.specie, element.sesso, element.peso)}><RxUpdate /></button></td></tr>
                                </>
                            })}
                        </tbody>
                    </table>

                )}

                {showForm && (
                    <div className="container-sm py-5">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3 mx-auto">
                                <label for="specie" class="form-label">Peso</label>
                                <body>

                                </body>
                                <input type="number" className="form-control" id='peso' onChange={(e) => setPeso(e.target.value)} />
                            </div>

                            <center><button type="submit" class="btn btn-primary" >Submit</button></center>
                        </form>
                    </div>
                )}

            </div>
        </>
    );
};

export default Home;