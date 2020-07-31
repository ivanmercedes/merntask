import React, { Fragment, useContext } from 'react'
import Tarea from './Tarea';
import proyectoContext from '../../context/proyectos/proyectoContex';


const ListadoTareas = () => {

    // extraer el state inicial
    // obtener el state de proyectos
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    // si no hay proyecto seleccionado
    if(!proyecto) return <h2>Selecciona un proyecto</h2>;
    // Array destructuring para extraer el proyecto actual

    const [proyectoActual] = proyecto;

    const tareas = [
        {nombre:'guele droga', estado : true},
        {nombre:'guele droga', estado : false},
        {nombre:'guele droga', estado : true},
        {nombre:'guele droga', estado : false}
    ]
    return (
        <Fragment>
            <h2>Proyecto {proyectoActual.nombre}</h2>

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