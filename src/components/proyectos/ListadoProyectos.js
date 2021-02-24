import React, { useContext, useEffect } from 'react'
import Proyecto from './Proyecto'
import proyectoContext from '../../context/proyectos/proyectoContex';
import AlertaContext from '../../context/alertas/alertaContext';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

const ListadoProyectos = () => {
    // extraer proyectos de state inicial
    const proyectosContext = useContext(proyectoContext);
    const { mensaje, proyectos, obtenerProyectos } = proyectosContext;

    const alertacontext = useContext(AlertaContext);
    const { alerta, mostrarAlerta } = alertacontext;


    // obtener proyectos cuando carga el componente
    useEffect(()=>{
        if(mensaje){
            // si hubo un error
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }
        obtenerProyectos();
        // eslint-disable-next-line
    },[mensaje]);

    // revisar si proyecto tiene contenido
    if(proyectos.length === 0 ) return <p>No hay proyectos, comienza creando uno</p>;


    
    return ( 
        <ul className="listado-proyectos">
             
             {alerta ? ( <div  className={`alerta ${alerta.categoria}`}>{alerta.mensaje}</div> ): null }

            <TransitionGroup>
                
            {proyectos.map(proyecto =>(
                <CSSTransition 
                key={proyecto._id}
                timeout={200}
                classNames="proyecto"
                >
                  <Proyecto  proyecto={proyecto} />
                </CSSTransition>
            ))}
               
            </TransitionGroup>
        </ul>
     );
}
 
export default ListadoProyectos;