import React, { useContext } from 'react';
import tareaContext from '../../context/tareas/tareaContext';
import proyectoContext from '../../context/proyectos/proyectoContex';


const Tarea = ({tarea}) => {

    // Extraer si un proyecto esta activo
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;


    // obtener la funcion del context de tarea
    const tareasContext = useContext(tareaContext);
    const { eliminarTarea, obtenerTareas, cambiarEstadoTarea, guardarTareasActual } = tareasContext;

    // extraer proyecto
    const [proyectoActual] = proyecto;

    /// funcion que se ejecuta cuando el usario presiona eliminar en una tarea
    const tareaEliminar = id =>{
        eliminarTarea(id);
        obtenerTareas(proyectoActual.id)
    }

    // Funcion que modifica el estado de las tareas
    const cambiarEstado = terea =>{
        if(tarea.estado){
            tarea.estado = false;
        }else{
            tarea.estado = true;
        }

        cambiarEstadoTarea(tarea);
    }

    // Agrega una tarea actual cuando el usario desea editarla
    const seleccionarTarea = tarea =>{
        guardarTareasActual(tarea);
    }

    return ( 
        <li className="tarea sombra">
            <p>{tarea.nombre}</p>

            <div className="estado">
                {tarea.estado 
                ? 
                    (
                        <button
                        type="button"
                        className="completo"
                        onClick={() => cambiarEstado(tarea)}
                        >Completo</button>
                    )
                :
                    (
                        <button
                        type="button"
                        className="incompleto"
                        onClick={() => cambiarEstado(tarea)}
                        >Incomoleto</button>
                    )
                }
            </div>

            <div className="acciones">
                <button
                type="button"
                className="btn btn-primario"
                onClick={() => seleccionarTarea(tarea)}
                >Editar</button>

                <button
                type="button"
                className="btn btn-secundario"
                onClick={()=>tareaEliminar(tarea.id)}
                >Eliminar</button>
            </div>
        </li>
     );
}
 
export default Tarea;