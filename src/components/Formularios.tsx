import { useForm } from "../hooks/useForm"

export const Formularios = () => {

   const { formulario, email, password, obtenerValorCampos} = useForm({
    email: '',
    password: ''
});

    return (
        <>
            <h3>Formularios</h3>
            <input 
                type="text" 
                className="form-control"
                placeholder="Email"
                value={ email }
                // e.target.value -> {target}
                onChange={ ({target}) => obtenerValorCampos(target.value, 'email') }
            />
            <input 
                type="password" 
                className="form-control mt-2 mb-2"
                placeholder="Password"
                value={ password }
                onChange={ ({target}) => obtenerValorCampos(target.value, 'password' ) }
            />
            <code>
                <pre>
                {
                JSON.stringify(formulario, null, 2)
            }
                </pre>
            </code>
        </>
    )
}
