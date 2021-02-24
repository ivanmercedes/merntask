import React , { useReducer } from 'react';
import tareaContext from './tareaContext';
import TareaReducer from './tareaReducer';

import { 
     TAREAS_PROYECTO,
     AGREGAR_TAREA, 
     VALIDAR_TAREA,
     ELIMINAR_TAREA,
     TAREA_ACTUAL,
     ACTUALIZAR_TAREA } from '../../types';

import clienteAxios from '../../config/axios';

const TareaState = props => {
    const initialState = {
        tareaproyecto: [],
        errortarea: false,
        tereaseleccionada: null

    }

    /// Crear dispatch y state
    const [state, dispatch] = useReducer(TareaReducer, initialState);


    /// crear las funciones


    // Obtener las tareas de un proyecto
    const obtenerTareas = async proyecto =>{
        try {

            const resultado = await clienteAxios.get('/api/tareas', { params: { proyecto }});

            dispatch({
                type: TAREAS_PROYECTO,
                payload: resultado.data.tareas
            })
        } catch (error) {
            console.log(error);
        }
    }

    // Agregar una tarea al proyecto seleccionado
    const agragarTarea = async tarea =>{
        try {
            const resultado = await clienteAxios.post('/api/tareas', tarea);
            console.log(resultado)
            dispatch({
                type: AGREGAR_TAREA,
                payload: tarea
            })
        } catch (error) {
            
        }
    }

    // Valida y muestra un eero en caso de que sea necesario
    const validarTarea = () =>{
        dispatch({
            type: VALIDAR_TAREA
        })
    }

    // Funcion para elimar las tareas por id
    const eliminarTarea = async (id, proyecto) =>{
       try {
          await clienteAxios.delete(`/api/tareas/${id}`, { params: {proyecto}})
        dispatch({
            type: ELIMINAR_TAREA,
            payload: id
        })
       } catch (error) {
           console.log(error);
       }
    }
     // Edita o modifica una tarea
     const actualizarTarea = async tarea => {
        
        try {
            const resultado = await clienteAxios.put(`/api/tareas/${tarea._id}`, tarea)
            dispatch({
                type: ACTUALIZAR_TAREA,
                payload: resultado.data.tarea
            })
        } catch (error) {
            console.log(error);
        }
      
    }
     
     // Extrae una tarea para la edicion
     const guardarTareasActual = tarea =>{
         dispatch({
            type: TAREA_ACTUAL,
            payload: tarea
         })
         
     }

    
    return (
        <tareaContext.Provider
        value={{
            tareaproyecto: state.tareaproyecto,
            errortarea: state.errortarea,
            tereaseleccionada: state.tereaseleccionada,
            obtenerTareas,
            agragarTarea,
            validarTarea,
            eliminarTarea,
            guardarTareasActual,
            actualizarTarea
        }}
        >
            {props.children}
        </tareaContext.Provider>
    )
}

export default TareaState;
