
import { 
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA } from '../../types';

export default (state, action) =>{
    switch(action.type){
        case TAREAS_PROYECTO:
            return {
                ...state,
                // tareaproyecto: state.tareaproyecto.filter(tarea => tarea.proyectoId === action.payload)
                tareaproyecto: action.payload
            }
        case AGREGAR_TAREA:
            return{
                ...state,
                tareaproyecto: [action.payload , ...state.tareaproyecto],
                errortarea: false
            }
        case VALIDAR_TAREA:
            return {
                ...state,
                errortarea: true
            }  
        case ELIMINAR_TAREA:
            return {
                ...state,
                tareaproyecto: state.tareaproyecto.filter(tarea => tarea._id !== action.payload)
            }   
        case TAREA_ACTUAL:
            return {
                ...state,
                tereaseleccionada: action.payload
            }
        case ACTUALIZAR_TAREA:
            return {
                ...state,
                tareas: state.tareaproyecto.map(tarea => tarea._id === action.payload._id ? action.payload : tarea),
                tereaseleccionada: null
            }
            default:
                return state
    }
}