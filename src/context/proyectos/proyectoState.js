import React, { useReducer } from 'react';

import proyectoContext from './proyectoContex';
import ProyectoReducer from './proyectoReducer';
import Proyecto from '../../components/proyectos/Proyecto';



const ProyectoState = props =>{
    const initalState = {
        formulario : false
    }

    // Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(ProyectoReducer, initalState);

    // Series de funciones para el CRUD

    return (
        <proyectoContext.Provider
        value={{
            formulario: state.formulario
        }}
        >
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState;