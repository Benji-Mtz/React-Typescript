import { useState } from 'react';


export const useForm = <T extends Object>( formulario: T ) => {
    
    const [state, setState] = useState(formulario);

    const obtenerValorCampos = (value: string, campo: keyof T) => {
        setState({
            ...state,
            [campo]: value
        })
    }

    return {
        ...state,
        formulario: state,
        obtenerValorCampos,
    }
}
