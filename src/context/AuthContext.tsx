import { createContext, PropsWithChildren, useContext, useState } from "react";

enum stateTest {
    'checking',
    'login',
    'closed',
    'authenticate' 
  };
  interface Authstate {
    stateValue: stateTest;
    loginWithPassword: (email:string, password:string) => void;
    logOut:()=> void
  };

export const AuthContext = createContext({} as Authstate);
// Crea el contexto con el tipo especificado
/* export const AuthContext = createContext<Authstate | undefined>(undefined);
//hook persdonalizado para usae el contextoi */
export const useAuthContext = () => useContext(AuthContext)

//provedor del contexto
export const AuthProvider = ({ children }: PropsWithChildren ) => {
   
    const [state,setstate] = useState(stateTest.checking);
    
    const loginWithPassword = ( email : string,password : string) =>{
      setstate(stateTest.login)
    }

    const logOut=() => {
        setstate(stateTest.closed)
    }

    return (
        <AuthContext.Provider value = {{
            stateValue: state,
            loginWithPassword,
            logOut
            
            }}>
            {children}

        </AuthContext.Provider>

    );

};