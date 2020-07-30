import React, { useReducer } from 'react';

import proyectoContext from './proyectoContex';
import ProyectoReducer from './proyectoReducer';
import Proyecto from '../../components/proyectos/Proyecto';
import { FORMULARIO_PROYECTO }  from '../../types'



const ProyectoState = props =>{
    const initalState = {
        formulario : false
    }

    // Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(ProyectoReducer, initalState);

    // Series de funciones para el CRUD
    const mostrarFormulario = () =>{
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }

    return (
        <proyectoContext.Provider
        value={{
            formulario: state.formulario,
            mostrarFormulario
        }}
        >
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState;