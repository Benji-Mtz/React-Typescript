import { useEffect } from "react"
import { useReducer } from "react"

interface AuthState {
    validando: boolean;
    token: string | null;
    username: string;
    nombre: string;
}
const initialState: AuthState = {

    validando: true,
    token: null,
    username: '',
    nombre: ''
}
type LoginPayload = {
    username: string,
    nombre: string
}
type AuthAction = 
    | { type: 'logout' }
    | { type: 'login', payload: LoginPayload}

const authReducer = ( state: AuthState, action: AuthAction): AuthState => {

    switch ( action.type ) {
        case 'logout':
            return {
                validando: false,
                token: null,
                nombre: '',
                username: ''
            }
        
        case 'login':
            const {nombre , username} = action.payload;
            return {
                validando: false,
                token: "ABCDFG",
                nombre,
                username
            }

        default:
            return state;
    }
}

export const Login = () => {

    // const [state, dispatch] = useReducer(authReducer, initialState);
    const [{ validando, token, nombre }, dispatch] = useReducer(authReducer, initialState);

    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: 'logout'})
        }, 1500);
    }, [])

    if (validando) {
        return (
            <>
                <h3>Login</h3>

                <div className="alert alert-info">
                    Validando...
                </div>
            </>
        )        
    }

    const login = () => {
        dispatch({
            type: 'login', 
            payload: {
                nombre: "Benji",
                username: "Zac"
            }
        })
    }

    const logout = () => {
        dispatch({
            type: 'logout'
        })
    }

    return (
        <>
            { 
                (token)
                ? <div className="alert alert-success"> Autenticado como: { nombre } </div>
                : <div className="alert alert-danger"> No Autenticado :/ </div>
            }

            {
                (token)
                ?<button
                    className="btn btn-danger"
                    onClick={logout}
                >
                    Logout
                </button>

                :<button
                    className="btn btn-primary"
                    onClick={login}
                >
                    Login
                </button>
            }
            
            
        </>
    )
}
