import React, { useReducer } from 'react';

import proyectoContext from './proyectoContex';
import ProyectoReducer from './proyectoReducer';
import Proyecto from '../../components/proyectos/Proyecto';
import { FORMULARIO_PROYECTO }  from '../../types'



const ProyectoState = props =>{
    const initalState = {
        formulario : false,
        proyectos : [
            {id:1, nombre: 'Tienda de Droga'},
            {id:2, nombre: 'Cuereria Shop'},
            {id:3, nombre: 'Robar Diario'},
            {id:4, nombre: 'Robar Diario'}
        ]
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
            proyectos: state.proyectos,
            mostrarFormulario
        }}
        >
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState;