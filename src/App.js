import React, { useState, useEffect } from 'react';
import Pregunta from './components/Pregunta'
import Formulario from './components/Formulario'
import Listado from './components/Listado'
import ControlPresupuesto from './components/ControlPresupuesto'

const App = () => {

  const [presupuesto, setPresupuesto] = useState(0)
  const [restante, setRestante] = useState(0)
  const [presupuestoPregunta, setPresupuestoPregunta] = useState(true)

  const [crearGasto, setCrearGasto] = useState(false)
  const [crearRestituirGasto, setRestituirGasto] = useState(false)

  const [gasto, setGasto] = useState({})
  const [gastos, setGastos] = useState([])

  useEffect(
    () => {
      if (crearGasto) {
        const listadosGastos = [...gastos, gasto]

        const presupuestoRestante = restante - gasto.cantidadGasto
        setRestante(presupuestoRestante)

        setGastos(listadosGastos)
        setCrearGasto(false)
      }

      if (crearRestituirGasto) {
     
        const listadosNuevo = [...gastos]
        
        const filtered = listadosNuevo.filter(
          item => ( item.id != gasto.id )
        );
        /*console.log(gasto)
        console.log(eliminar)*/
        const presupuestoDevuelto = restante + gasto.cantidadGasto
        setRestante(presupuestoDevuelto)

        setGastos(filtered)
        setRestituirGasto(false)
      }


    }, [crearGasto, crearRestituirGasto]
  )

  return (
    <div className="App container">
      <header>
        <h1>Gastos Semanal</h1>

        <div className="contenido-principal contenido">
          {
            (presupuestoPregunta) ?
              <Pregunta
                setPresupuesto={setPresupuesto}
                setPresupuestoPregunta={setPresupuestoPregunta}
                setRestante={setRestante}
              />
              :
              <div className="row">
                <div className="one-half column">
                  <Formulario
                    setGasto={setGasto}
                    setCrearGasto={setCrearGasto}
                  />
                </div>
                <div className="one-half column">
                  <Listado
                    setGasto={setGasto}
                    gastos={gastos}
                    setRestituirGasto={setRestituirGasto}
                  />

                  <ControlPresupuesto
                    presupuesto={presupuesto}
                    restante={restante}
                  />
                </div>
              </div>
          }

        </div>
      </header>

    </div>
  )
}
export default App;

