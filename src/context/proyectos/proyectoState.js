import React, { useReducer } from 'react';

import { v4 as uuidv4 } from 'uuid';

import proyectoContext from './proyectoContex';
import ProyectoReducer from './proyectoReducer';
import { FORMULARIO_PROYECTO, OBTENER_PROYECTOS, AGREGAR_PROYECTO, VALIDAR_FORMULARIO, PROYECTO_ACTUAL, ELIMINAR_PROYECTO  }  from '../../types'




const ProyectoState = props =>{

    const proyectos =  [
        {id:1, nombre: 'Tienda de Droga'},
        {id:2, nombre: 'Cuereria Shop'},
        {id:3, nombre: 'Robar Diario'},
        {id:4, nombre: 'Robar Diario'}
    ];

    const initalState = {
        proyectos : [],
        formulario : false,
        errorformulario: false,
        proyecto: null
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
    const obtenerProyectos = () =>{
        dispatch({
            type: OBTENER_PROYECTOS,
            payload: proyectos
        })
    }
    // Agregar un proyecto
    const agregarProyecto = proyecto =>{
        proyecto.id = uuidv4();

        // Insertar proyecto en el state con un dispatch
        dispatch({
            type: AGREGAR_PROYECTO,
            payload: proyecto
        });
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
    const eliminarProyecto = proyectoId =>{
        dispatch({
            type: ELIMINAR_PROYECTO,
            payload: proyectoId
        })
    }
    return (
        <proyectoContext.Provider
        value={{
            formulario: state.formulario,
            proyectos: state.proyectos,
            errorformulario: state.errorformulario,
            proyecto: state.proyecto,
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