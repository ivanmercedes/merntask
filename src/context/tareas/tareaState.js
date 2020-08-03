import React , { useReducer } from 'react';
import tareaContext from './tareaContext';
import TareaReducer from './tareaReducer';

import { 
     TAREAS_PROYECTO,
     AGREGAR_TAREA, 
     VALIDAR_TAREA,
     ELIMINAR_TAREA,
     ESTADO_TAREA,
     TAREA_ACTUAL,
     ACTUALIZAR_TAREA } from '../../types';

const TareaState = props => {
    const initialState = {
        tareas:  [
            {id:1, proyectoId:1, nombre:'guele droga', estado : true},
            {id:2, proyectoId:2, nombre:'guele droga', estado : false},
            {id:3, proyectoId:3, nombre:'guele droga', estado : true},
            {id:4, proyectoId:4, nombre:'guele droga', estado : false},
            {id:5, proyectoId:1, nombre:'guele droga', estado : true},
            {id:6, proyectoId:2, nombre:'guele droga', estado : false},
            {id:7, proyectoId:2, nombre:'guele droga', estado : true},
            {id:8, proyectoId:4, nombre:'guele droga', estado : true},
            {id:9, proyectoId:2, nombre:'guele droga', estado : false},
            {id:10, proyectoId:3, nombre:'guele droga', estado : true}
        ],
        tareaproyecto: null,
        errortarea: false,
        tereaseleccionada: null

    }

    /// Crear dispatch y state
    const [state, dispatch] = useReducer(TareaReducer, initialState);


    /// crear las funciones


    // Obtener las tareas de un proyecto
    const obtenerTareas = proyectoId =>{
        dispatch({
            type: TAREAS_PROYECTO,
            payload: proyectoId
        })
    }

    // Agregar una tarea al proyecto seleccionado
    const agragarTarea = tarea =>{
        dispatch({
            type: AGREGAR_TAREA,
            payload: tarea
        })
    }

    // Valida y muestra un eero en caso de que sea necesario
    const validarTarea = () =>{
        dispatch({
            type: VALIDAR_TAREA
        })
    }

    // Funcion para elimar las tareas por id
    const eliminarTarea = id =>{
        dispatch({
            type: ELIMINAR_TAREA,
            payload: id
        })
    }
     // Cambia el estado de cada tarea
     const cambiarEstadoTarea = tarea =>{
         dispatch({
             type: ESTADO_TAREA,
             payload: tarea
         })
     }
     
     // Extrae una tarea para la edicion
     const guardarTareasActual = tarea =>{
         dispatch({
            type: TAREA_ACTUAL,
            payload: tarea
         })
         
     }

     // Edita o modifica una tarea
     const actualizarTarea = tarea => {
         console.log(tarea);
         dispatch({
             type: ACTUALIZAR_TAREA,
             payload: tarea
         })
     }
    return (
        <tareaContext.Provider
        value={{
            tareas: state.tareas,
            tareaproyecto: state.tareaproyecto,
            errortarea: state.errortarea,
            tereaseleccionada: state.tereaseleccionada,
            obtenerTareas,
            agragarTarea,
            validarTarea,
            eliminarTarea,
            cambiarEstadoTarea,
            guardarTareasActual,
            actualizarTarea
        }}
        >
            {props.children}
        </tareaContext.Provider>
    )
}

export default TareaState;
