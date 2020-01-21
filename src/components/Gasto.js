import React from 'react'

const Gasto = ({ gasto, eliminarItemListado }) => {
    return (
        <li className="gastos">
            <p>
                {gasto.nombreGasto}<span className="gasto">{gasto.cantidadGasto}</span>
                <button type="button" onClick={() => eliminarItemListado(gasto)}>Eliminar</button>
            </p>
        </li>
    )
}

export default Gasto
