import React, { useEffect, useState } from 'react'
import { getLink } from '../Utils/CRUD'

const Link = () => {
    const [links, setLinks] = useState([])

    useEffect(() => {
       
        getLink(setLinks)

    }, [] ) 

console.log(links)
    return (
        <div className='container mt-5'>
            {
                links.map((link) => (
                    <div className="card text-white bg-dark mb-3" style={{ maxWidth: '50rem' }} key={link.data.id} >
                        <div className="card-header">

                            <a href={link.data.url} target='_blank' rel='noreferrer'>{link.data.url} </a>
                        
                        </div>
                        <div className="card-body">
                            <h4 className="card-title">{link.data.name} </h4>
                            <p className="card-text"> {link.data.description} </p>
                        </div>
                    </div>

                ))
          }      



        </div>
    )
}

export default Link
