
import { useAuthContext } from '../context/AuthContext'

export default function LoginPage() {
  
    const { stateValue }  =  useAuthContext();
    
    console.log(stateValue);

    return (
    <>
    
    <h3>Bienvenidos a la pagina</h3>
    
    
    
    </>
  )
}
