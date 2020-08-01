import React, { useContext, useState } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContex';
import tareaContext from '../../context/tareas/tareaContext';

const FormTarea = () => {


    
    // Extraer si un proyecto esta activo
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    // obtener la funcion del context de tarea
    const tareasContext = useContext(tareaContext);
    const { errortarea, agragarTarea, validarTarea, obtenerTareas} = tareasContext;


    // State del formulario
    const  [tarea, guardarTarea] = useState({
        nombre: ''
    });

    // extraer nombre del proyecto
    const { nombre } = tarea;

    // si no hay proyecto seleccionado
    if(!proyecto) return null;
    // Array destructuring para extraer el proyecto actual

    const [proyectoActual] = proyecto;

    // Leer los valores del formulario
    const handleChange = e =>{
        guardarTarea({
            ...tarea,
            [e.target.name] : e.target.value
        })

    }

    const onSubmit = e =>{
        e.preventDefault();

        // validar
        if(nombre.trim() === ''){
            validarTarea();
            return;
        }
        // pasar la validacion

        // agregar la nueva tarea al state de tareas
        tarea.proyectoId =  proyectoActual.id;
        tarea.estado = false;
        agragarTarea(tarea);

        // obtener y filtrar las tareas del proyecto actual
        obtenerTareas(proyectoActual.id);

        // reiniciar el form
        guardarTarea({
            nombre: ''
        })
        
    }

    return ( 
        <div className="formulario">
             <form
             onSubmit={onSubmit}
             >
                 <div className="contenedor-input">
                     <input type="text"
                     className="input-text"
                     placeholder="Nombre tarea..."
                     name="nombre"
                     value={nombre}
                     onChange={handleChange}
                     />
                 </div>

                 <div className="contenedor-input">
                     <input 
                     type="submit"
                     className="btn btn-primario btn-block"
                     value="Agregar Tarea"
                     />
                 </div>
             </form>
             {errortarea ? <p className="mensaje error">El nombre de la tarea es obligatorio</p> : null}
        </div>
     );
}
 
export default FormTarea;