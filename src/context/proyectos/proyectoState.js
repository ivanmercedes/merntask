import React, { useReducer } from 'react';


import proyectoContext from './proyectoContex';
import ProyectoReducer from './proyectoReducer';
import { FORMULARIO_PROYECTO, OBTENER_PROYECTOS, AGREGAR_PROYECTO, PROYECTO_ERROR, VALIDAR_FORMULARIO, PROYECTO_ACTUAL, ELIMINAR_PROYECTO  }  from '../../types'


import clienteAxios from '../../config/axios';

const ProyectoState = props =>{

   

    const initalState = {
        proyectos : [],
        formulario : false,
        errorformulario: false,
        proyecto: null,
        mensaje: null
    }

    // Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(ProyectoReducer, initalState);

    // Series de funciones para el CRUD
    const mostrarFormulario = () =>{
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }

    // Obtener los proyectos
    const obtenerProyectos = async () =>{
        try {
            
            const resultado = await clienteAxios.get('/api/proyectos');
            
            dispatch({
                type: OBTENER_PROYECTOS,
                payload: resultado.data.proyectos
            });
        } catch (error) {
            const alerta = {
                msg: 'Hubo un error',
                categoria: 'alerta-error'
            }
            dispatch({
                type: PROYECTO_ERROR,
                payload: alerta
            })
        }
    }
    // Agregar un proyecto
    const agregarProyecto = async proyecto =>{
        

       try {
           const resultado = await clienteAxios.post('/api/proyectos', proyecto);
           
            // Insertar proyecto en el state con un dispatch
            dispatch({
                type: AGREGAR_PROYECTO,
                payload: resultado.data
            });
       } catch (error) {
        const alerta = {
            msg: 'Hubo un error',
            categoria: 'alerta-error'
        }
        dispatch({
            type: PROYECTO_ERROR,
            payload: alerta
        })
    }
    }

    // validar el formulario por errores
    const mostrarError = () =>{
        dispatch({
            type: VALIDAR_FORMULARIO
        })
    }
    // Selecciona el proyecto que el usuario dio click
    const proyectoActual = proyectoId =>{
        dispatch({
            type: PROYECTO_ACTUAL,
            payload: proyectoId
        })
    }

    // Eliminar un proyecto
    const eliminarProyecto = async proyectoId =>{
        try {
            await clienteAxios.delete(`/api/proyectos/${proyectoId}`);

            dispatch({
                type: ELIMINAR_PROYECTO,
                payload: proyectoId
            })

        } catch (error) {
            const alerta = {
                msg: 'Hubo un error',
                categoria: 'alerta-error'
            }
            dispatch({
                type: PROYECTO_ERROR,
                payload: alerta
            })
        }
        
    }
    return (
        <proyectoContext.Provider
        value={{
            formulario: state.formulario,
            proyectos: state.proyectos,
            errorformulario: state.errorformulario,
            proyecto: state.proyecto,
            mensaje: state.mensaje,
            mostrarFormulario,
            obtenerProyectos,
            agregarProyecto,
            mostrarError,
            proyectoActual,
            eliminarProyecto
        }}
        >
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState;