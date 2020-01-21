import React, { useState, Fragment } from 'react'
import shortid from 'shortid'
import Error from './Error'


const Formulario = (props) => {
    const [nombreGasto, setNombreGasto] = useState('')
    const [cantidadGasto, setCantidadGasto] = useState(0)
    const [error, setError] = useState(false)

    const { setGasto, setCrearGasto } = props

    const agregarGasto = e => {
        e.preventDefault()

        //validar
        if (nombreGasto === '' || isNaN(cantidadGasto) || cantidadGasto < 1) {
            setError(true)

            return;
        }

        //pasar el gasto al componente principal

        const gasto = {
            nombreGasto,
            cantidadGasto,
            id: shortid.generate()
        }

        setGasto(gasto)
        setError(false)

        setNombreGasto('')
        setCantidadGasto(0)
        setCrearGasto(true)

    }

    return (

        <form onSubmit={agregarGasto}>
            <h2>Agreagar Gastos Aqui</h2>

            {error ? <Error mensaje="Ambos campos son obligatorios o Presupuesto incorrecto" /> : null}

            <div className="campo">
                <label htmlFor="nombre-gasto">Nombre Gasto</label>
                <input
                    name="nombre-gasto"
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    onChange={e => { setNombreGasto(e.target.value) }}
                    value={nombreGasto}
                />
            </div>
            <div className="campo">
                <label htmlFor="cantidad-gasto">Cantidad Gasto</label>
                <input
                    name="cantidad-gasto"
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 300"
                    onChange={e => { setCantidadGasto(parseFloat(e.target.value)) }}
                    value={cantidadGasto}
                />
            </div>

            <input type="submit" value="Agregar Gasto" className="button-primary u-full-width" />

        </form>

    )
}

export default Formulario
