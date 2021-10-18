import { useState } from 'react';

// <T extends Object> T = Tipo de dato que extiende de un objeto, T => Cualquier_Objeto
export const useForm = <T extends Object>( formulario: T ) => {
    
    const [state, setState] = useState(formulario);

    // keyof T => una llave que se incluya en el objeto T
    const obtenerValorCampos = (value: string, campo: keyof T) => {
        setState({
            ...state,
            // target.value = [campo]
            [campo]: value
        })
    }

    return {
        ...state,
        formulario: state,
        obtenerValorCampos,
    }
}
