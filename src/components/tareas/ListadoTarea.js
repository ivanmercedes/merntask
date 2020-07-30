import React, { Fragment } from 'react'
import Tarea from './Tarea';



const ListadoTareas = () => {
    const tareas = [
        {nombre:'guele droga', estado : true},
        {nombre:'guele droga', estado : false},
        {nombre:'guele droga', estado : true},
        {nombre:'guele droga', estado : false}
    ]
    return (
        <Fragment>
            <h2>Proyecto Tienda Virtual</h2>

            <ul className="listado-tareas">
                {tareas.length === 0
                ? ( <li className="tarea"><p>No hay tareas</p></li> )
                : tareas.map(tarea =>(
                    <Tarea tarea={tarea} />
                ))
            }
            </ul>

            <button
            type="button"
            className="btn btn-primario"
            >
                Eliminar Proyecto &times;
            </button>
        </Fragment>
      );
}
 
export default ListadoTareas;