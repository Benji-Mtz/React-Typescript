interface Persona {
    nombreCompleto: string;
    edad: number;
    direccion: Direccion
};

interface Direccion {
    pais: string;
    casaNo: number;
}

export const ObjetosLiterales = () => {

    const persona: Persona = {
        nombreCompleto: 'Benji',
        edad: 34,
        direccion: {
            pais: 'Mexico',
            casaNo: 21
        }
    }

    return (
        <div>
            <h1>ObjetosLiterales</h1>

            <code>
                <pre>
                    { JSON.stringify( persona, null, 2 ) }
                </pre>
            </code>
        </div>
    )
}
