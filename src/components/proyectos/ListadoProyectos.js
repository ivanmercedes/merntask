import React, { useContext } from 'react'
import Proyecto from './Proyecto'
import proyectoContext from '../../context/proyectos/proyectoContex';

const ListadoProyectos = () => {
    // extraer proyectos de state inicial
    const proyectosContext = useContext(proyectoContext);
    const { proyectos } = proyectosContext;
   // revisar si proyecto tiene contenido
    if(proyectos.length ===0 ) return null;

    return ( 
        <ul className="listado-proyectos">
            {proyectos.map(proyecto =>(
                <Proyecto 
                key={proyecto.id}
                proyecto={proyecto} />
            ))}
        </ul>
     );
}
 
export default ListadoProyectos;