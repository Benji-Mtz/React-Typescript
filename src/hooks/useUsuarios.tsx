import { useEffect, useRef, useState } from "react";
import { reqResApi } from "../api/reqRes";
import { ReqResListado, Usuario } from "../interfaces/reqRes";

export const useUsuarios = () => {

    const [usuarios, setUsuarios] = useState<Usuario[]>([]);

    // Segun el objeto paginaRef su valor es paginaRef.current
    // Evita refrescar TODA LA PAGINA
    const paginaRef = useRef(1);

    useEffect(() => {
        // Consultar API
        cargarUsuarios();
    }, [])

    const cargarUsuarios = async () => {
        const response = await reqResApi.get<ReqResListado>('/users',{
            // Enviamos los parametros que es page para paginación
            params: {
                page: paginaRef.current
            }
        })

        if (response.data.data.length > 0) {
            setUsuarios( response.data.data );
        }else {
            paginaRef.current --;
            alert('No hay mas registros')
        }

    }

    const paginaSiguiente = () => {
        paginaRef.current ++;
        cargarUsuarios();
    }

    const paginaAnterior = () => {
        if ( paginaRef.current > 1 ) {
            paginaRef.current --;
            cargarUsuarios();
        }
    }


    return { 
        usuarios,
        paginaSiguiente,
        paginaAnterior
    }

}
