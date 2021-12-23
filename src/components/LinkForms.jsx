import React, { useState } from 'react'
import { handleSubmitAdd } from '../Utils/CRUD'


const LinkForms = () => {
    const [url, setUrl] = useState('')
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    
    //Enviar el formulario
    const addLink = (e) => {
        //Previene que la pagina se refresque
        e.preventDefault();
        handleSubmitAdd(url, name, description )  
        setUrl('')
        setName('')
        setDescription('')
    }

    const noValid = !(url.length && name.length && description.length > 1)


    return (

        <form className="card card-body mt-2" onSubmit={addLink}>
            <div className="form-group input-group mb-1">
                <div className="input-group-text bg-light" >
                    <i className="material-icons text-danger">insert_link</i>
                </div>
                <input
                    onChange={(e) => setUrl(e.target.value)}
                    className="form-control"
                    type="text"
                    placeholder="https://url.com"
                    value={url}
                />
            </div>

            <div className="form-group input-group">
                <div className="input-group-text bg-light" >
                    <i className="material-icons text-danger">create</i>
                </div>
                <input
                    onChange={(e) => setName(e.target.value)}
                    className="form-control"
                    type="text"
                    placeholder="Nombre del sitio"
                    value={name}
                />
            </div>

            <div className="form-group">
                <textarea
                    onChange={(e)=> setDescription(e.target.value)}
                    value={description}
                    rows="3"
                    className="form-control mt-1"
                    placeholder="Descripcion del link guardado">
                </textarea>
            </div>
            <button className="btn btn-outline-warning mt-1"
                onSubmit={addLink}
                disabled={noValid}
            >Guardar</button>



        </form>
    )
}

export default LinkForms