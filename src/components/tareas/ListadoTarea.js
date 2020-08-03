import React, { Fragment, useContext } from 'react'
import Tarea from './Tarea';
import proyectoContext from '../../context/proyectos/proyectoContex';
import tareaContext from '../../context/tareas/tareaContext';
import { CSSTransition, TransitionGroup }   from 'react-transition-group';
const ListadoTareas = () => {

    // extraer el state inicial
    // obtener el state de proyectos
    const proyectosContext = useContext(proyectoContext);
    const { proyecto, eliminarProyecto } = proyectosContext;

    // obtener las tarea del proyecto
    const tareasContext = useContext(tareaContext);
    const { tareaproyecto } = tareasContext;

    // si no hay proyecto seleccionado
    if(!proyecto) return <h2>Selecciona un proyecto</h2>;
    // Array destructuring para extraer el proyecto actual

    const [proyectoActual] = proyecto;



    // Elimina un proyecto
    const onClickEliminar = () =>{
      
        eliminarProyecto(proyectoActual.id);
    }
    return (
        <Fragment>
            <h2>Proyecto {proyectoActual.nombre}</h2>

            <ul className="listado-tareas">
                {tareaproyecto.length === 0
                ? ( <li className="tarea"><p>No hay tareas</p></li> )
                : <TransitionGroup>
                  {  tareaproyecto.map(tarea =>(
                    <CSSTransition
                    key={tarea.id}
                    timeout={200}
                    classNames="tarea"
                    >
                        <Tarea 
                           tarea={tarea} 
                        />
                    </CSSTransition>
                ))}
                </TransitionGroup>

                
            }
            </ul>

            <button
            type="button"
            className="btn btn-primario"
            onClick={onClickEliminar}
            >
                Eliminar Proyecto &times;
            </button>
        </Fragment>
      );
}
 
export default ListadoTareas;