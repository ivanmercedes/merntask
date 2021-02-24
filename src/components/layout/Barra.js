import React, { useEffect, useContext } from 'react';
import authContext from '../../context/autenticacion/authContex';



const Barra = () => {
    // Extraer la infomarcion de autenticacion
    const authcontext = useContext(authContext);
    const { usuario, usuarioAutenticado, cerrarSesion } = authcontext;

    useEffect(() => {
        usuarioAutenticado();
        // eslint-disable-next-line
    }, []);

    return ( 
        <header className="app-header">
            {usuario ? <p className="nombre-usuario">Hola, <span>{usuario.nombre}</span></p> : null}
           
            <nav className="nav-principal">
                <button 
                className="btn btn-blank cerrar-sesion"
                 onClick={() => cerrarSesion() }
                >
                    Cerrar Sesion
                </button>
            </nav>
        </header>
     );
}
 
export default Barra;