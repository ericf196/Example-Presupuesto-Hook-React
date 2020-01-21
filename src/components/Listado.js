import React from 'react'
import Gasto from './Gasto'

export const Listado = ({ gastos, setGasto, setRestituirGasto }) => {

    const eliminarItemListado = (gasto) => {
        
        setGasto(gasto)
        setRestituirGasto(true)
    }

    return (
        <div className="gastos-realizados">
            <h2>Listado</h2>
            {
                gastos.map(gasto => (
                    <Gasto
                        key={gasto.id}
                        gasto={gasto}
                        eliminarItemListado={eliminarItemListado}
                    />
                ))
            }
        </div>
    )
}
export default Listado;