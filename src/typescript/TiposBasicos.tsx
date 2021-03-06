import React from 'react'

export const TiposBasicos = () => {

    let nombre: string | number  = 'Benji';
    const edad: number = 34;
    const estaActivo: boolean = false;

    const poderes: string[] = ['Velocidad', 'Volar', 'Super fuerza'];

    return (
        <>
            <h3>Tipos básicos</h3>
            { nombre }, { edad }, { (estaActivo) ? 'Activo' : 'No Activo' }
            <br />
            { poderes.join(', ') }
        </>
    )
}
