import React, { Fragment, useState } from 'react'
import Error from './Error'

const Pregunta = (props) => {

    const { setPresupuesto, setPresupuestoPregunta, setRestante } = props

    const [cantidad, setCantidad] = useState(0)
    const [error, setError] = useState(false)

    //Validar Presupuesto 
    const handlePresupuesto = (e) => {
        e.preventDefault()

        if (cantidad <= 0 || isNaN(cantidad)) {
            setError(true)
            return;
        }
        setError(false)
        setPresupuesto(cantidad)
        setPresupuestoPregunta(false)
        setRestante(cantidad)
    }

    return (
        <Fragment>
            <h2>Coloca tu presupuesto</h2>

            {error ? <Error mensaje="El Presupuesto es incorrecto"/> : null}

            <form onSubmit={handlePresupuesto}>
                <input type="number" className="u-full-width" placeholder="Agrega tu Presupuesto" onChange={e => setCantidad(parseFloat(e.target.value))}
                />

                <input type="submit" className="button-primary u-full-width" value="Definir Presupuesto" />

            </form>
        </Fragment>
    )
}
export default Pregunta;