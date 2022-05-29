import React from 'react'

const Pages = ({ prev, next, onPrevious, onNext }) => {

    const handlePrevious = () => {
        onPrevious();
    }

    const handleNext = () => {
        onNext();
    }
    return (
        <nav className='my-5'>
            <ul className='pagination justify-content-center'>
                {/* si el componente prev existe (operador ternario), que salga el botón de previous  */}
                {
                    prev ? (
                        <li className='page-item'>
                            <button className='page-link' onClick={handlePrevious}>Previous</button>
                        </li>
                    ) : null

                }
                {
                    next ? (
                        <li className='page-item'>
                            <button className='page-link' onClick={handleNext}>Next</button>
                        </li>
                    ) : null

                }
            </ul>
        </nav>
    )
}

export default Pages