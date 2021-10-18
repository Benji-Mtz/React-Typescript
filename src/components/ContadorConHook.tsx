import React from 'react'
import { useCounter } from '../hooks/useCounter'

export const ContadorConHook = () => {

    // Con el valor inicial default del hook useCounter puede o no tener un valor
    const {valor, acumular} = useCounter(120);

    return (
        <>
            <h3>Contador: <small> { valor } </small></h3>

            <button
                className="btn btn-primary"
                onClick={ () => acumular(1) }
            >
                +1
            </button>
            &nbsp;
            <button
                className="btn btn-primary"
                onClick={ () => acumular(-1) }
            >
                -1
            </button>
        </>
    )
}
