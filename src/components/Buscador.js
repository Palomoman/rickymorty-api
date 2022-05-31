import React, { useState } from 'react'

const Buscador = () => {

    const [search, setSearch] = useState("")

    const searcher = (e) => {
        setSearch(e.target.value)
    }
    return (
        <div className="containerInput">
            <input
                className="form-control"
                placeholder="Búsqueda por Nombre"
                value={search}
                onChange={searcher}
            />
            <button className="btn btn-success">
                Buscar
            </button>
        </div>
    )
}

export default Buscador