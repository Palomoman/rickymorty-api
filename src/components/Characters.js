import React from 'react'


// el componente recibe una prop que es el array de characters y asi podemos iterar sobre el
const Characters = ({ characters = [] }) => {
    return (
        <div className='row'>
            {
                characters.map((item, index) => (
                    <div key={index} className='col mb-5'>
                        <div className='card' style={{ minWidth: "200px" }}>
                            <img src={item.image} alt="" />
                            <div className='card-body'>
                                <h5 className='card-title'>{item.name}</h5>
                                <hr />
                                <p>location: {item.location.name}</p>
                                <p>spacie: {item.species}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Characters